import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import vectorImg from "../../../assets/Home/profile.webp";
import ArrowImg from "../../../assets/Home/comments/Arrow.webp";
import Google from "../../../assets/Home/Comments/Google.webp";
import Email from "../../../assets/Home/Comments/Email.webp";
import { IoIosArrowRoundBack } from "react-icons/io";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import {
  loginWithGoogle,
  login,
  register,
  getProfile,
  logout,
  resendVerification,
  forgotPassword,
  resetPassword,
} from "../../../controllers/AuthController";
import ReviewController from "../../../controllers/ReviewController";

function Comments() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const commentsRef = useRef(null);

  useEffect(() => {
    const url = window.location.pathname;
    const params = new URLSearchParams(window.location.search);

    if (
      (url === "/comments" || params.get("verified") === "true") &&
      commentsRef.current
    ) {
      commentsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Function to generate random colors and determine text color
  const generateProfileColors = () => {
    const colors = [
      '#EF4444', '#F97316', '#F59E0B', '#EAB308', '#84CC16',
      '#22C55E', '#10B981', '#14B8A6', '#06B6D4', '#0EA5E9',
      '#3B82F6', '#6366F1', '#8B5CF6', '#A855F7', '#D946EF',
      '#EC4899', '#F43F5E', '#DC2626', '#EA580C', '#D97706',
      '#CA8A04', '#65A30D', '#16A34A', '#059669', '#0D9488',
      '#0891B2', '#0284C7', '#2563EB', '#4F46E5', '#7C3AED',
      '#9333EA', '#C026D3', '#DB2777', '#E11D48'
    ];
    
    const bgColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Convert hex to RGB to calculate luminance
    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    };
    
    const rgb = hexToRgb(bgColor);
    // Calculate relative luminance
    const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
    
    // Use white text for dark backgrounds, black text for light backgrounds
    const textColor = luminance > 0.5 ? '#000000' : '#FFFFFF';
    
    return { bgColor, textColor };
  };

  // Function to generate initials
  const generateInitials = (name) => {
    if (!name) return '';
    const trimmedName = name.trim();
    if (!trimmedName) return '';
    
    const words = trimmedName.split(' ');
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    }
    
    return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
  };

  // Function to generate profile picture
  const generateProfilePicture = async (name) => {
    return new Promise((resolve, reject) => {
      if (!name || !name.trim()) {
        reject(new Error('Name is required'));
        return;
      }

      try {
        const { bgColor, textColor } = generateProfileColors();
        const initials = generateInitials(name);

        console.log('Generating profile picture:', { name, initials, bgColor, textColor });

        // Create canvas element
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 200;
        canvas.height = 200;

        // Draw circular background
        ctx.fillStyle = bgColor;
        ctx.beginPath();
        ctx.arc(100, 100, 100, 0, 2 * Math.PI);
        ctx.fill();

        // Draw text (initials)
        ctx.fillStyle = textColor;
        ctx.font = 'bold 80px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(initials, 100, 100);

        // Convert to data URL
        const dataUrl = canvas.toDataURL('image/png', 0.9); // 0.9 quality for smaller file size
        
        console.log('Profile picture generated successfully');
        resolve(dataUrl);

      } catch (error) {
        console.error('Canvas profile picture generation error:', error);
        reject(error);
      }
    });
  };

  /* Authentication */
  const [activeOverlay, setActiveOverlay] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const data = await getProfile();
        if (
          !data ||
          data.success === false ||
          data.message === "Unauthenticated."
        ) {
          setUser(null);
        } else {
          setUser(data);
        }
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tokenFromURL = params.get("token");

    if (tokenFromURL) {
      localStorage.setItem("token", tokenFromURL);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  // Register state
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regErrorMsg, setRegErrorMsg] = useState("");
  const [isGeneratingProfilePic, setIsGeneratingProfilePic] = useState(false);

  const openOverlay = (name) => setActiveOverlay(name);
  
  useEffect(() => {
    if (activeOverlay) {
      if (document.activeElement && 
          (document.activeElement.tagName === 'INPUT' || 
           document.activeElement.tagName === 'TEXTAREA')) {
        document.activeElement.blur();
      }
    }
  }, [activeOverlay]);
  
  const closeOverlay = (e) => {
    if (e.target.id === "overlay-background" || e.target.id === "close-button") {
      setActiveOverlay(null);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      const res = await login({ email, password });
      if (res.token) {
        setActiveOverlay(null);
        setEmail("");
        setPassword("");
        window.location.reload();
      } else if (res.message) {
        setErrorMsg(res.message);
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Terjadi kesalahan saat login");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setRegErrorMsg("");
    setIsGeneratingProfilePic(true);

    try {
      const formData = new FormData();
      formData.append("name", regName);
      formData.append("email", regEmail);
      formData.append("password", regPassword);

      // Generate profile picture
      try {
        const profilePicDataUrl = await generateProfilePicture(regName);
        
        // Convert data URL to blob
        const response = await fetch(profilePicDataUrl);
        const blob = await response.blob();
        
        // Create file from blob
        const file = new File([blob], `${regName.replace(/\s+/g, '_')}_profile.png`, {
          type: 'image/png'
        });
        
        formData.append("avatar", file);
      } catch (profileError) {
        console.warn("Failed to generate profile picture:", profileError);
      }

      const res = await register(formData);

      if (res.success) {
        // cek property success dari server
        alert(
          res.message ||
            "Registrasi berhasil! Silakan cek email Anda untuk verifikasi."
        );
        if (res.token) {
          localStorage.setItem("token", res.token);
          setActiveOverlay("overlay4");
        }
        setRegName("");
        setRegEmail("");
        setRegPassword("");
      } else {
        setRegErrorMsg(res.message || "Terjadi kesalahan. Coba lagi.");
      }
    } catch (err) {
      console.error(err);
      setRegErrorMsg("Terjadi kesalahan saat registrasi");
    } finally {
      setIsGeneratingProfilePic(false);
    }
  };

  /* Review Functions */
  const [rating, setRating] = useState(0);
  const [komentar, setKomentar] = useState("");
  
  const handleSubmitReview = async () => {
    if (!user) {
      alert("Silakan login terlebih dahulu untuk memberi penilaian");
      setActiveOverlay("overlay1");
      return;
    }
    if (rating === 0) {
      alert("Silakan pilih rating terlebih dahulu");
      return;
    }
    if (komentar.trim() === "") {
      alert("Komentar tidak boleh kosong");
      return;
    }

    try {
      await ReviewController.createReview({ rating, komentar });
      alert("Terima kasih atas penilaian Anda!");
      setRating(0);
      setKomentar("");
    } catch (error) {
      alert(
        "Gagal mengirim penilaian: " + (error.message || JSON.stringify(error))
      );
    }
  };

  /* Logout Function */
  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      navigate("/");
    } catch {
      alert("Gagal logout. Coba lagi.");
    }
  };

  const [resendMsg, setResendMsg] = useState("");
  const [resendLoading, setResendLoading] = useState(false);
  const handleResendVerification = async () => {
    try {
      setResendLoading(true);
      setResendMsg("");

      const res = await resendVerification();

      if (res?.message) {
        setResendMsg(res.message);
      } else {
        setResendMsg("Kode verifikasi berhasil dikirim ulang ke email Anda.");
      }
    } catch (err) {
      setResendMsg(err.message || "Gagal mengirim ulang kode verifikasi.");
      console.error(err);
    } finally {
      setResendLoading(false);
    }
  };

  /* FORGOT PASSWORD */
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotMsg, setForgotMsg] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [forgotLoading, setForgotLoading] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const resetToken = params.get("reset_token");
    const emailFromURL = params.get("email");

    if (resetToken) {
      setActiveOverlay("overlayReset");
      setResetToken(resetToken);
      if (emailFromURL) setForgotEmail(emailFromURL);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  return (
    <div
      ref={commentsRef}
      className="w-full min-h-[88svh] bg-[#A4161A] flex items-center justify-center"
    >
      <div className="w-[83%] h-fit pb-20 bg-white rounded-[19px] flex justify-center pt-11">
        <section className="w-full h-fit flex flex-col items-center">
          <h1 className="font-semibold text-[1.7rem] uppercase px-3 text-center">Rating & Komentar</h1>
          <div className="w-[90%]">
            <div className="mt-10">
              <div className="w-full flex gap-1 md:gap-3 lg:gap-5">
              <div className="w-19 h-15 md:w-25 md:h-21 rounded-full flex items-center justify-center overflow-hidden">
                {loading ? (
                  <img
                    className="w-full h-full object-cover"
                    src={vectorImg}
                    alt={user?.name || "Avatar"}
                  />
                ) : (
                  <img
                    className="w-full h-full object-cover"
                    src={user?.avatar || vectorImg}
                    alt={user?.name || "Avatar"}
                  />
                )}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className="w-full">
                    <div className="flex justify-between">
                      <p className="md:pt-2 pl-1.5">
                        {user?.name || "Login untuk membuat sebuah penilaian"}
                      </p>
                    </div>
                </div>
                <div className="hidden md:block">
                  <div className="flex gap-1 cursor-pointer my-auto">
                    {[...Array(5)].map((_, i) => {
                      const value = i + 1;
                      return (
                        <span key={i} onClick={() => setRating(value)}>
                          {value <= rating ? (
                            <StarSolid className="w-10 h-10 text-yellow-500" />
                          ) : (
                            <StarOutline className="w-10 h-10 text-gray-700" />
                          )}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
              {!loading && user?.name && (
                <div className="relative inline-block text-left">
                  {/* Icon Menu */}
                  <div className="w-6 h-6 flex flex-col justify-center items-center cursor-pointer" onClick={()=>{setOpen(!open)}}>
                    <span
                      className={`block h-1 w-6 bg-current rounded-full transform transition-all duration-200 ease-in-out ${
                        open ? "rotate-45 translate-y-2" : ""
                      }`}
                    ></span>
                    <span
                      className={`block h-1 w-6 bg-current rounded-full transform transition-all duration-200 ease-in-out my-1 ${
                        open ? "opacity-0" : ""
                      }`}
                    ></span>
                    <span
                      className={`block h-1 w-6 bg-current rounded-full transform transition-all duration-200 ease-in-out ${
                        open ? "-rotate-45 -translate-y-2" : ""
                      }`}
                    ></span>
                  </div>

                  {/* Dropdown Menu */}
                  {open && (
                    <div className="absolute right-8 top-0 mt-2 w-40 bg-gray-100 border border-black rounded shadow-lg">
                      <button
                        onClick={() => navigate("/user-profile")}
                        className="w-full text-left px-4 py-2 font-semibold hover:bg-gray-200 cursor-pointer"
                      >
                        Settings
                      </button>
                      <hr />
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 font-semibold hover:bg-gray-200 cursor-pointer"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="md:hidden">
                  <div className="flex gap-1 cursor-pointer my-auto justify-center">
                    {[...Array(5)].map((_, i) => {
                      const value = i + 1;
                      return (
                        <span key={i} onClick={() => setRating(value)}>
                          {value <= rating ? (
                            <StarSolid className="w-10 h-10 text-yellow-500" />
                          ) : (
                            <StarOutline className="w-10 h-10 text-gray-700" />
                          )}
                        </span>
                      );
                    })}
                  </div>
                </div>
            </div>
            <div className="relative w-full h-46 mt-5 border-1 border-black rounded-[10px] flex flex-wrap items-start">
              <textarea
                type="text"
                className="w-full h-full p-3 outline-none resize-none"
                placeholder="Tuliskan pengalaman anda mengenai layanan kami..."
                value={komentar}
                onChange={(e) => setKomentar(e.target.value)}
                onClick={() => !user && (openOverlay("overlay1"))}
              ></textarea>
              <div
                className="absolute cursor-pointer bottom-0 right-0 w-11 h-11 mr-3 mb-3 flex items-center justify-center bg-[#A42619] rounded-full ml-auto"
                onClick={() => {
                  if (!user) {
                    openOverlay("overlay1");
                  } else {
                    handleSubmitReview();
                  }
                }}
              >
                <img className="w-5 h-5" src={ArrowImg} alt="" />
              </div>
            </div>

            {/* Overlay Login dan Registrasi */}
            {activeOverlay === "overlay1" && (
              <div
                id="overlay-background"
                onClick={closeOverlay}
                className="fixed inset-0 flex items-center justify-center bg-black/45 z-50"
                style={{ backdropFilter: "none" }}
              >
                {/* Konten overlay di tengah */}
                <div className="relative bg-white px-8 rounded-lg shadow-lg max-w-md w-full pt-10 pb-5">
                  <div className="absolute right-5 top-3 cursor-pointer w-5 h-5 font-black" id="close-button" onClick={closeOverlay}>✕</div>
                  <h2 className="text-xl font-semibold mb-9 text-center">
                    Login terlebih dahulu agar dapat memberikan rating
                    dan komentar
                  </h2>
                  <div className="flex flex-wrap justify-center gap-5">
                    <div
                      onClick={loginWithGoogle}
                      className="border-[1.5px] transition-all hover:-translate-y-0.5 hover:shadow-[0px_3px_0px_rgba(0,_0,_0,_1)] flex flex-row px-4 p-2 rounded-[10px] gap-4 cursor-pointer"
                    >
                      <img
                        className="w-10 h-10 object-contain"
                        src={Google}
                        alt="Login Google"
                      />
                      <p className="my-auto text-[19px]">Login Dengan Google</p>
                    </div>
                    <div className="w-69.5 border-[1.5px] transition-all hover:-translate-y-0.5 hover:shadow-[0px_3px_0px_rgba(0,_0,_0,_1)] flex flex-row px-4 p-2 rounded-[10px] gap-4 cursor-pointer">
                      <img
                        className="w-10 h-10 object-contain"
                        src={Email}
                        alt=""
                      />
                      <p
                        className="my-auto text-[19px]"
                        onClick={() => openOverlay("overlay2")}
                      >
                        Login Dengan Email
                      </p>
                    </div>
                  </div>
                  <div className="w-full text-center pt-9 text-[#9B9B9B]"><p>Tidak punya akun ? <span className="text-[#A20000] cursor-pointer"  onClick={() => openOverlay("overlay3")}>Register</span></p></div>
                </div>
              </div>
            )}
            {/* Akhir dari memilih opsi login */}

            {/* Overlay Login Via Email */}
            {activeOverlay === "overlay2" && (
              <div
                id="overlay-background"
                onClick={closeOverlay}
                className="fixed inset-0 flex items-center justify-center bg-black/45 z-50"
                style={{ backdropFilter: "none" }}
              >
                <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                  <IoIosArrowRoundBack className="absolute size-9 top-4 left-5 cursor-pointer" onClick={() => openOverlay("overlay1")}/>
                  <h2 className="text-2xl font-semibold text-center">
                    Login
                  </h2>
                  <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <div className="gap-5">
                      <p>Email</p>
                      <input
                        type="email"
                        className="w-full h-8 border-1 rounded-[7px] px-3 border-black"
                        placeholder="Masukkan alamat email anda..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="gap-5 mt-3">
                      <p>Password</p>
                      <input
                        type="password"
                        className="w-full h-8 border-1 rounded-[7px] px-3 border-black"
                        placeholder="Masukkan password anda..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex flex-row gap-1">
                      <p className="mt-1">Tidak punya akun?</p>
                      <p
                        className="mt-1 text-[#A20000] cursor-pointer"
                        onClick={() => openOverlay("overlay3")}
                      >
                        Registrasi
                      </p>
                    </div>
                    {errorMsg && (
                      <p className="h-0 text-red-600 text-sm text-center">
                        {errorMsg}
                      </p>
                    )}
                    <button
                      type="submit"
                      className="w-full h-9 mt-7 rounded-[7px] font-semibold text-center bg-[#A30F00] text-white"
                    >
                      Login
                    </button>
                    <p
                      className="mt-2 text-center text-sm text-blue-600 cursor-pointer hover:underline"
                      onClick={() => openOverlay("overlayForgot")}
                    >
                      Lupa Password?
                    </p>
                  </form>
                </div>
              </div>
            )}
            {/* Akhir dari Login Via Email */}

            {/* Overlay Registrasi Via Email */}
            {activeOverlay === "overlay3" && (
              <div
                id="overlay-background"
                onClick={closeOverlay}
                className="fixed inset-0 flex items-center justify-center bg-black/45 z-50"
                style={{ backdropFilter: "none" }}
              >
                <div className="absolute bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                  <IoIosArrowRoundBack className="absolute size-9 top-4 left-5 cursor-pointer" onClick={() => openOverlay("overlay1")}/>
                  <h2 className="text-2xl font-semibold mb-4 text-center">
                    Registrasi
                  </h2>

                  <form onSubmit={handleRegister}>
                    <div className="gap-5 mt-3">
                      <p>Nama</p>
                      <input
                        type="text"
                        className="w-full h-8 border-1 rounded-[7px] px-3 border-black"
                        placeholder="Masukkan nama anda..."
                        value={regName}
                        onChange={(e) => setRegName(e.target.value)}
                        required
                        disabled={isGeneratingProfilePic}
                      />
                    </div>
                    <div className="gap-5 mt-3">
                      <p>Email</p>
                      <input
                        type="email"
                        className="w-full h-8 border-1 rounded-[7px] px-3 border-black"
                        placeholder="Masukkan alamat email anda..."
                        value={regEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                        required
                        disabled={isGeneratingProfilePic}
                      />
                    </div>
                    <div className="gap-5 mt-3">
                      <p>Password</p>
                      <input
                        type="password"
                        minLength={8}
                        className="w-full h-8 border-1 rounded-[7px] px-3 border-black"
                        placeholder="Masukkan password anda..."
                        value={regPassword}
                        onChange={(e) => setRegPassword(e.target.value)}
                        required
                        disabled={isGeneratingProfilePic}
                      />
                    </div>
                    <div className="flex flex-row gap-1">
                      <p className="mt-1">Sudah punya akun?</p>
                      <p
                        className="mt-1 text-[#A20000] cursor-pointer"
                        onClick={() => !isGeneratingProfilePic && openOverlay("overlay2")}
                      >
                        Login
                      </p>
                    </div>
                    {regErrorMsg && (
                      <p className="h-0 text-red-600 text-sm text-center">
                        {regErrorMsg}
                      </p>
                    )}
                    <button 
                      type="submit"
                      className="w-full h-9 mt-7 rounded-[7px] font-semibold text-center bg-[#A30F00] text-white cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                      disabled={isGeneratingProfilePic}
                    >
                      {isGeneratingProfilePic ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Loading...
                        </>
                      ) : (
                        "Registrasi"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            )}
            {/* Akhir dari Registrasi Via Email */}

            {/* Overlay Verifikasi Email Registrasi */}
            {activeOverlay === "overlay4" && (
              <div
                id="overlay-background"
                onClick={closeOverlay}
                className="fixed inset-0 flex items-center              justify-center bg-black/45 z-50"
              >
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                  <h2 className="text-2xl font-semibold mb-4 text-center">
                    Verifikasi Email
                  </h2>
                  <p className="mb-3 text-center">
                    Silakan cek email Anda dan klik link verifikasi.
                  </p>

                  <button
                    onClick={handleResendVerification}
                    disabled={resendLoading}
                    className="w-full h-9 mt-3 rounded-[7px] font-semibold text-center bg-[#A30F00] text-white"
                  >
                    {resendLoading
                      ? "Mengirim..."
                      : "Kirim Ulang Kode Verifikasi"}
                  </button>

                  {resendMsg && (
                    <p className="mt-2 text-center text-sm text-green-600">
                      {resendMsg}
                    </p>
                  )}
                </div>
              </div>
            )}
            {/* Akhir dari Overlay Verifikasi Email Registrasi */}

            {/* Overlay Lupa Password */}
            {activeOverlay === "overlayForgot" && (
              <div
                id="overlay-background"
                onClick={closeOverlay}
                className="fixed inset-0 flex items-center justify-center bg-black/45 z-50"
              >
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                  <h2 className="text-2xl font-semibold mb-4 text-center">
                    Lupa Password
                  </h2>
                  <input
                    type="email"
                    placeholder="Masukkan email Anda"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    className="w-full h-8 border-1 rounded-[7px] px-3 border-black mb-3"
                  />
                  <button
                    onClick={async () => {
                      setForgotLoading(true);
                      setForgotMsg("");
                      const res = await forgotPassword(forgotEmail);
                      setForgotMsg(res.message);
                      setForgotLoading(false);
                    }}
                    disabled={forgotLoading}
                    className="w-full h-9 rounded-[7px] font-semibold text-center bg-[#A30F00] text-white"
                  >
                    {forgotLoading ? "Mengirim..." : "Kirim Email Reset"}
                  </button>
                  {forgotMsg && (
                    <p className="mt-2 text-center text-sm text-green-600">
                      {forgotMsg}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Overlay Reset Password */}
            {activeOverlay === "overlayReset" && (
              <div
                id="overlay-background"
                onClick={closeOverlay}
                className="fixed inset-0 flex items-center justify-center bg-black/45 z-50"
              >
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                  <h2 className="text-2xl font-semibold mb-4 text-center">
                    Reset Password
                  </h2>
                  <input
                    type="hidden"
                    name="email"
                    value={forgotEmail}
                    readOnly
                  />

                  <input
                    type="password"
                    placeholder="Password baru"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full h-8 border-1 rounded-[7px] px-3 border-black mb-3"
                  />
                  <input
                    type="password"
                    placeholder="Konfirmasi password baru"
                    value={newPasswordConfirm}
                    onChange={(e) => setNewPasswordConfirm(e.target.value)}
                    className="w-full h-8 border-1 rounded-[7px] px-3 border-black mb-3"
                  />
                  <button
                    onClick={async () => {
                      const payload = {
                        email: forgotEmail,
                        token: resetToken,
                        password: newPassword,
                        password_confirmation: newPasswordConfirm,
                      };
                      const res = await resetPassword(payload);
                      alert(res.message);
                      if (res.success !== false) setActiveOverlay(null);
                    }}
                    className="w-full h-9 rounded-[7px] font-semibold text-center bg-[#A30F00] text-white"
                  >
                    Reset Password
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Comments;
