'use client';

import { useState } from 'react';

export default function NewProductPage() {
  const [title,setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    // Next steps: We will wire this to a Next.js Server Action to save to MongoDB
    console.log("Saving product:", { title, price, description });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-100 mb-8 border-b border-slate-700 pb-4">Create Digital Product</h1>
      
      <form onSubmit={handleUpload} className="space-y-6 bg-[#1e293b] p-6 rounded-xl border border-slate-800 shadow-xl">
        
        {/* Title Input */}
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-2">Product Title</label>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-[#0f172a] border border-slate-700 rounded-md px-4 py-2 text-slate-200 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            placeholder="e.g., Ultimate Next.js Boilerplate"
            required
          />
        </div>

        {/* Price Input */}
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-2">Price (INR)</label>
          <input 
            type="number" 
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full bg-[#0f172a] border border-slate-700 rounded-md px-4 py-2 text-slate-200 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            placeholder="999"
            required
          />
        </div>

        {/* Description Input */}
        <div>
          <label className="block text-sm font-medium text-teal-400 mb-2">Description</label>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full bg-[#0f172a] border border-slate-700 rounded-md px-4 py-2 text-slate-200 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            placeholder="What will the customer get?"
          />
        </div>

        {/* Secure File Upload Area */}
        <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center hover:border-cyan-400 transition-colors cursor-pointer bg-[#0f172a]">
          <span className="text-slate-400 block mb-2">Drag and drop your secure PDF or ZIP file here</span>
          <input type="file" className="text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-teal-900 file:text-teal-400 hover:file:bg-teal-800" />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full bg-[#d946ef] hover:bg-fuchsia-500 text-white font-bold py-3 px-4 rounded-md shadow-[0_0_15px_rgba(217,70,239,0.4)] transition-all"
        >
          Publish Product to Store
        </button>
      </form>
    </div>
  );
}