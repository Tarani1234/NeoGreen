"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation"; 

type Content = {
  title: string;
  description: string;
};

export default function Dashboard() {
  const router = useRouter();

  const [section, setSection] = useState<
    "banner" | "testimonials" | "products"
  >("banner");
  const [content, setContent] = useState<Content>({
    title: "",
    description: "",
  });
  const [contentId, setContentId] = useState<string>("");


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContent({ ...content, [name]: value });
  };

  //  Fetch banner
  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await axios.get("https://neogreen-backend.onrender.com/api/banners");
        if (response.data.length > 0) {
          const banner = response.data[0];
          setContent({ title: banner.title, description: banner.description });
          setContentId(banner._id);
        } else {
          setContent({ title: "", description: "" });
          setContentId("");
        }
      } catch (error) {
        console.error("Error fetching banner:", error);
      }
    };
    if (section === "banner") fetchBanner();
  }, [section]);


  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    if (contentId) {
      // Update existing banner
      await axios.put(`http://localhost:5000/api/banners/${contentId}`, {
        title: content.title,
        description: content.description,
      });

      alert("Banner updated successfully");
      
      
      router.push("/"); 

    } else {
      // Add new banner
      const response = await axios.post("https://neogreen-backend.onrender.com/api/banners", {
        title: content.title,
        description: content.description,
      });
      setContentId(response.data._id);
      alert("Banner added successfully");
    }
  } catch (error) {
    console.error("Error saving banner:", error);
  }
};



  const handleDelete = async () => {
    if (!contentId) return;
    try {
      await axios.delete(`https://neogreen-backend.onrender.com/api/banners/${contentId}`);
      setContent({ title: "", description: "" });
      setContentId("");
      alert("Banner deleted successfully");
    } catch (error) {
      console.error("Error deleting banner:", error);
    }
  };

  const handleLogout = async () => {
  try {
    const response = await axios.post(
      "https://neogreen-backend.onrender.com/api/admin/logout",
    );
    console.log("Logout response:", response); 

    localStorage.removeItem("token");
    console.log("Token removed from localStorage"); 

    router.push("/");
    console.log("Redirecting to admin"); 
  } catch (error) {
    console.error("Logout failed:", error);
  }
};


  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-lg p-8 transition-all duration-300 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">
            Dashboard
          </h1>
          <nav className="flex flex-col gap-3">
            <button
              onClick={() => setSection("banner")}
              className={`py-3 px-4 rounded-lg text-left text-lg font-medium transition-colors duration-200 ${
                section === "banner"
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              Home Banner
            </button>
            <button
              onClick={() => setSection("testimonials")}
              className={`py-3 px-4 rounded-lg text-left text-lg font-medium transition-colors duration-200 ${
                section === "testimonials"
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              Testimonials
            </button>
            <button
              onClick={() => setSection("products")}
              className={`py-3 px-4 rounded-lg text-left text-lg font-medium transition-colors duration-200 ${
                section === "products"
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              Products
            </button>
          </nav>
        </div>

      
        <button
          onClick={handleLogout}
          className="mt-8 flex items-center gap-2 text-black py-3 px-4 rounded-lg hover:bg-red-100 transition-colors duration-200 font-medium"
        >
          <Image
            src="/images/logout.png"
            width={24}
            height={24}
            alt="Logout icon"
            className="inline-block"
          />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 capitalize tracking-tight">
          Manage {section}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 max-w-xl bg-white p-8 rounded-xl shadow-lg"
        >
          <label className="flex flex-col gap-2">
            <span className="text-gray-700 font-medium">Title</span>
            <input
              type="text"
              name="title"
              value={content.title}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              placeholder="Enter title"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-gray-700 font-medium">Description</span>
            <textarea
              name="description"
              value={content.description}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 resize-y"
              rows={4}
              placeholder="Enter description"
            />
          </label>

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              {contentId ? "Update Banner" : "Add Banner"}
            </button>

            {contentId && (
              <button
                type="button"
                onClick={handleDelete}
                className="bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium"
              >
                Delete Banner
              </button>
            )}
          </div>
        </form>

        {/* Preview Section */}
        <div className="mt-10 max-w-xl">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Preview</h3>
          <div className="border border-gray-200 p-6 rounded-xl bg-white shadow-md">
            <h4 className="text-2xl font-bold text-gray-900">
              {content.title}
            </h4>
            <p className="mt-3 text-gray-600 leading-relaxed">
              {content.description}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
