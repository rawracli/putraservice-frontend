import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VectorImg from "../../assets/Home/profile.webp"
import { getProfile, updateProfile, updatePassword } from "../../controllers/AuthController.js";
import show from '../../assets/UserProfile/Show.webp';
import hide from '../../assets/UserProfile/Hide.webp';

function UserProfile() {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState(VectorImg);

    {/* Password */}
    // Fetch Password
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    // Menyembunyikan Password
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    {/* Akhir */}

    useEffect(() => {
      const fetchProfile = async () => {
        const data = await getProfile();
        if (data && data.name) {
          setNama(data.name);
          setEmail(data.email);
          if (data.avatar) {
            if (data.avatar.startsWith("http")) {
              setAvatarPreview(data.avatar);
            } else {
              setAvatarPreview(`${import.meta.env.VITE_API_URL_IMAGE}/storage/uploads/profile/${data.avatar}`);
            }
          }
        }
      };
      fetchProfile();
    }, []);

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setAvatar(file);
        setAvatarPreview(URL.createObjectURL(file));
      }
    };

    const handleSave = async () => {
      setLoading(true);
      setMessage("");
    
      const formData = new FormData();
      formData.append("name", nama);
      formData.append("email", email);
      formData.append("_method", "PUT"); // spoof PUT method via POST
    
      if (avatar) {
        formData.append("avatar", avatar);
    }

    try {
      const res = await updateProfile(formData);
        console.log("Response dari updateProfile:", res);
  
        if (res.success) {
          setMessage("Profil berhasil diperbarui ✅");
        } else if (res.errors) {
          const firstErrorKey = Object.keys(res.errors)[0];
          const firstErrorMsg = res.errors[firstErrorKey][0];
          setMessage(firstErrorMsg || "Validasi gagal ❌");
        } else {
          setMessage(res.message || "Gagal memperbarui profil ❌");
        }
    } catch (error) {
      console.error("Error updateProfile:", error);
      setMessage("Terjadi kesalahan saat mengirim data ❌");
    }

    setLoading(false);
    };

    const handlePasswordUpdate = async () => {
    setPasswordMessage("");
    
    if (!oldPassword.trim()) {
      setPasswordMessage("Masukkan password lama");
      return;
    }
    if (!newPassword.trim()) {
      setPasswordMessage("Masukkan password baru");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordMessage("Konfirmasi password tidak cocok");
      return;
    }
    
    setLoading(true);
    
    const payload = {
      old_password: oldPassword,
      new_password: newPassword,
      new_password_confirmation: confirmPassword,
    };
  
    try {
      const res = await updatePassword(payload);
      if (res.success) {
        setPasswordMessage("Password berhasil diperbarui ✅");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else if (res.errors) {
        const firstKey = Object.keys(res.errors)[0];
        setPasswordMessage(res.errors[firstKey][0]);
      } else {
        setPasswordMessage(res.message || "Gagal memperbarui password ❌");
      }
    } catch {
      setPasswordMessage("Terjadi kesalahan ❌");
    }
  
    setLoading(false);
    };

    // Clear message setelah 3 detik
    useEffect(() => {
      if (message) {
        const timer = setTimeout(() => setMessage(""), 5000);
        return () => clearTimeout(timer);
      }
    }, [message]);
    
    useEffect(() => {
      if (passwordMessage) {
        const timer = setTimeout(() => setPasswordMessage(""), 5000);
        return () => clearTimeout(timer);
      }
    }, [passwordMessage]);
    return [
        <div className="relative bg-[#A4161A] h-auto max-w-[1536px] mx-auto flex justify-center">
          <Link className="absolute right-7 top-2 text-white text-3xl cursor-pointer" to="/"><p>✕</p></Link>
            <div className="w-[80%] h-full flex justify-around gap-8 mt-13 mb-16 flex-wrap">
                <div className="w-full h-full gap-8 flex flex-row max-md:flex-wrap">
                    <div className="w-1/2 max-md:w-full px-6 py-7 flex flex-col bg-white rounded-[8px]">
                        <h1 className="font-semibold text-[23px]">Akun</h1>
                        <div className="flex flex-col mt-4">
                            <label for="nama">Nama</label>
                            <input id="nama" type="text" className="px-2 border-1 py-2 border-black rounded-[5px]" value={nama} onChange={(e) => setNama(e.target.value)}/>
                        </div>
                        <div className="flex flex-col mt-3">
                            <label for="email">Email</label>
                            <input id="email" type="email" className="px-2 border-1 py-2 border-black rounded-[5px]" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        {message && (<p className="mt-2 text-sm text-[#A4161A]">{message}</p>)}
                        <button className="w-35 h-10 text-white flex ml-auto mt-8 md:mt-10 items-center justify-center bg-[#A30F00] rounded-[5px] cursor-pointer" onClick={handleSave} disabled={loading}>{loading ? "Menyimpan..." : "Simpan"}</button>
                    </div>
                    <div className="w-1/2 max-md:w-full px-6 py-7 bg-white rounded-[8px] flex items-center justify-center flex-col">
                        <h1 className="font-semibold text-[23px]">Foto Profile</h1>
                        <div className="cursor-pointer w-20 sm:w-28 md:w-36 aspect-square bg-black rounded-full overflow-hidden" onClick={() => document.getElementById("avatarInput").click()}>
                          <img className="w-full h-full object-cover" src={avatarPreview} alt=""/>
                        </div>
                        <input type="file" accept="image/*" id="avatarInput" style={{ display: "none" }} onChange={handleImageChange}/>
                        <button className="w-35 h-10 text-white mt-5 bg-[#A30F00] rounded-[5px] cursor-pointer" onClick={handleSave} disabled={loading}>{loading ? "Menyimpan..." : "Ubah Profile"}</button>
                    </div>
                </div>
                <div className="w-full px-6 py-7 flex flex-col bg-white rounded-[8px]">
                    <h1 className="font-semibold text-[23px]">Ubah Password</h1>
                        <div className="mt-4">
                          <label htmlFor="old_password">Password Lama</label>
                          <div className="relative flex flex-col w-full justify-center">
                            <input id="old_password" type={showOldPassword ? "text" : "password"} value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} className="px-2 pr-10 border-1 py-2.5 border-black rounded-[5px] text-sm" placeholder="Masukan Password Lama"/>
                            <img src={showOldPassword ? hide : show} alt="Toggle visibility" onClick={() => setShowOldPassword(!showOldPassword)} className="w-5 h-5 absolute right-2 cursor-pointer object-contain"/>
                          </div>
                        </div>
                        <div className="mt-3">
                          <label for="new_password">Password Baru</label>
                          <div className="relative flex flex-col w-full justify-center">
                            <input id="new_password" type={showNewPassword ? "text" : "password"} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="px-2 border-1 py-2.5 border-black rounded-[5px] text-sm" placeholder="Masukan Password Baru"/>
                            <img src={showNewPassword ? hide : show} alt="Toggle visibility" onClick={() => setShowNewPassword(!showNewPassword)} className="w-5 h-5 absolute right-2 cursor-pointer object-contain"/>
                          </div>
                        </div>
                        <div className="mt-3">
                          <label for="confirm_password">Konfirmasi Password Baru</label>
                          <div className="relative flex flex-col w-full justify-center">
                            <input id="confirm_password" type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="px-2 border-1 py-2.5 border-black rounded-[5px] text-sm" placeholder="Konfirmasi Password Baru"/>
                            <img src={showConfirmPassword ? hide : show} alt="Toggle visibility" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="w-5 h-5 absolute right-2 cursor-pointer object-contain"/>
                          </div>
                        </div>
                        {passwordMessage && (<p className="mt-2 text-sm text-[##A4161A]">{passwordMessage}</p>)}
                    <button className="w-35 h-10 text-white flex ml-auto mt-13 items-center justify-center bg-[#A30F00] rounded-[5px] cursor-pointer" onClick={handlePasswordUpdate} disabled={loading}>{loading ? "Menyimpan..." : "Simpan"}</button>
                </div>
            </div>
        </div>
    ];
}

export default UserProfile;