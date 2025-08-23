import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import vectorImg from "../../../assets/Home/comments/Vector.webp";
import ArrowImg from "../../../assets/Home/comments/Arrow.webp";
import Google from "../../../assets/Home/Comments/Google.webp";
import Email from "../../../assets/Home/Comments/Email.webp";
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
  // scroll ke bagian komentar jika route /comments atau query verified=true
  const commentsRef = useRef(null);

  useEffect(() => {
    const url = window.location.pathname;
    const params = new URLSearchParams(window.location.search);

    // Cek jika route /comments dan query verified=true
    if (
      (url === "/comments" || params.get("verified") === "true") &&
      commentsRef.current
    ) {
      commentsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  // akhir dari scroll ke bagian komentar

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

  const openOverlay = (name) => setActiveOverlay(name);
  const closeOverlay = (e) => {
    if (e.target.id === "overlay-background") {
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

    try {
      const formData = new FormData();
      formData.append("name", regName);
      formData.append("email", regEmail);
      formData.append("password", regPassword);

      if (fileInputRef.current && fileInputRef.current.files[0]) {
        formData.append("avatar", fileInputRef.current.files[0]);
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
        setPhoto(vectorImg);
        if (fileInputRef.current) fileInputRef.current.value = null;
      } else {
        setRegErrorMsg(res.message || "Terjadi kesalahan. Coba lagi.");
      }
    } catch (err) {
      console.error(err);
      setRegErrorMsg("Terjadi kesalahan saat registrasi");
    }
  };

  const [photo, setPhoto] = useState(vectorImg);
  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  {
    /* Akhir dari Authentication */
  }

  {
    /* Fungsi Review */
  }
  const [rating, setRating] = useState(0);
  const [komentar, setKomentar] = useState("");
  // fungsi submit review
  const handleSubmitReview = async () => {
    if (!user) {
      alert("Silakan login terlebih dahulu untuk memberi penilaian");
      setActiveOverlay("overlay1"); // buka popup login
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
  {
    /* Akhir dari Fungsi Review */
  }

  {
    /* Fungsi Logout */
  }
  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      navigate("/");
    } catch {
      alert("Gagal logout. Coba lagi.");
    }
  };
  {
    /* Akhir dari Fungsi Logout */
  }

  const [resendMsg, setResendMsg] = useState("");
  const [resendLoading, setResendLoading] = useState(false);
  const handleResendVerification = async () => {
    try {
      setResendLoading(true);
      setResendMsg("");

      const res = await resendVerification(); // langsung pakai controller

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

  {
    /* LUPA PASSWORD */
  }
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotMsg, setForgotMsg] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [forgotLoading, setForgotLoading] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const resetToken = params.get("reset_token");
    const emailFromURL = params.get("email"); // ambil email dari query param

    if (resetToken) {
      setActiveOverlay("overlayReset");
      setResetToken(resetToken);
      if (emailFromURL) setForgotEmail(emailFromURL); // set email otomatis
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  return (
    <div
      ref={commentsRef}
      className="w-full h-[750px] bg-[#A4161A] flex items-center justify-center"
    >
      <div className="w-[80%] h-[600px] bg-white rounded-[19px] flex items-center justify-center">
        <section className="w-full h-[85%] flex flex-col items-center">
          <h1 className="font-semibold text-[36px]">Rating & Komentar</h1>
          <div className="w-[80%]">
            <div className="w-full flex flex-row gap-5 mt-10">
              <div className="bg-[#C2C1C1] w-25 h-21 rounded-full flex items-center justify-center overflow-hidden">
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
                  {loading ? (
                    <p>Login untuk membuat sebuah penilaian</p>
                  ) : (
                    <div className="flex justify-between">
                      <p>
                        {user?.name || "Login untuk membuat sebuah penilaian"}
                      </p>
                    </div>
                  )}
                </div>
                <div>
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
                  <p
                    className="mt-1 text-[30px] cursor-pointer select-none"
                    onClick={() => setOpen(!open)}
                  >
                    {open ? "✕" : "☰"}
                  </p>

                  {/* Dropdown Menu */}
                  {open && (
                    <div className="absolute right-8 top-0 mt-2 w-40 bg-gray-100 border border-black rounded shadow-lg">
                      <button
                        onClick={() => navigate("/user-profile")}
                        className="w-full text-left px-4 py-2 font-semibold hover:bg-gray-200"
                      >
                        Settings
                      </button>
                      <hr />
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 font-semibold hover:bg-gray-200"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="w-full h-60 mt-5 border-2 border-black rounded-[10px] flex flex-wrap items-start">
              <textarea
                type="text"
                className="w-full h-[75%] p-3 outline-none resize-none"
                placeholder="Tuliskan pengalaman anda mengenai layanan kami..."
                value={komentar}
                onChange={(e) => setKomentar(e.target.value)}
              ></textarea>
              <div
                className="w-11 h-11 mr-3 flex items-center justify-center bg-[#A42619] rounded-full ml-auto"
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
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                  <h2 className="text-2xl font-semibold mb-4">
                    Login terlebih dahulu agar dapat <br /> memberikan rating
                    dan komentar
                  </h2>
                  <div className="flex flex-wrap justify-center gap-5">
                    <div
                      onClick={loginWithGoogle}
                      className="outline-2 outline-gray-900 flex flex-row px-4 p-2 rounded-[10px] gap-4 cursor-pointer"
                    >
                      <img
                        className="w-10 h-10 object-contain"
                        src={Google}
                        alt="Login Google"
                      />
                      <p className="my-auto text-[19px]">Login Dengan Google</p>
                    </div>
                    <div className="w-69.5 outline-2 outline-gray-900 flex flex-row px-4 p-2 rounded-[10px] gap-4">
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
                </div>
              </div>
            )}
            {/* Akhir dari memilih opsi login */}

            {/* Overlay Registrasi Via Email */}
            {activeOverlay === "overlay2" && (
              <div
                id="overlay-background"
                onClick={closeOverlay}
                className="fixed inset-0 flex items-center justify-center bg-black/45 z-50"
                style={{ backdropFilter: "none" }}
              >
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                  <h2 className="text-2xl font-semibold mb-4 text-center">
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
                        className="mt-1 text-[#A20000]"
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
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                  <h2 className="text-2xl font-semibold mb-4 text-center">
                    Registrasi
                  </h2>
                  <form onSubmit={handleRegister}>
                    <div
                      className="gap-1 flex flex-col cursor-pointer"
                      onClick={handleDivClick}
                    >
                      <p>Foto Profil</p>
                      <img
                        className="w-23 h-23 rounded-full outline-3 outline-red-900 object-cover"
                        src={photo}
                        alt="Foto Profil"
                      />
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                      />
                    </div>
                    <div className="gap-5 mt-3">
                      <p>Nama</p>
                      <input
                        type="text"
                        className="w-full h-8 border-1 rounded-[7px] px-3 border-black"
                        placeholder="Masukkan nama anda..."
                        value={regName}
                        onChange={(e) => setRegName(e.target.value)}
                        required
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
                      />
                    </div>
                    <div className="gap-5 mt-3">
                      <p>Password</p>
                      <input
                        type="password"
                        className="w-full h-8 border-1 rounded-[7px] px-3 border-black"
                        placeholder="Masukkan password anda..."
                        value={regPassword}
                        onChange={(e) => setRegPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex flex-row gap-1">
                      <p className="mt-1">Sudah punya akun?</p>
                      <p
                        className="mt-1 text-[#A20000]"
                        onClick={() => openOverlay("overlay2")}
                      >
                        Login
                      </p>
                    </div>
                    {regErrorMsg && (
                      <p className="h-0 text-red-600 text-sm text-center">
                        {regErrorMsg}
                      </p>
                    )}
                    <button className="w-full h-9 mt-7 rounded-[7px] font-semibold text-center bg-[#A30F00] text-white">
                      Registrasi
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
