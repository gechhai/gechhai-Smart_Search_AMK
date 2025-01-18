import { useState, useEffect } from "react";
import { FileText, Search } from "lucide-react";
import { Document } from "../types";
import axios from "axios";
import { Loading2 } from "../components/Loading/Loading2";

export function Library() {
  const [documents, setDocuments] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // TODO: Replace with actual API call
  const fetchDocument = async (question: string) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/search?question=${question}`
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    const response = await fetchDocument(query);
    if (response && response.data) {
      console.log(response.data.related_docs);
      setDocuments(response.data.related_docs);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white ml-2 ">Document Search</h1>
        <p className="text-sm text-gray-300 mb-5 ml-2">
            Search through company documents by their content</p>
        <div className="relative">
          <input
            type="text"
            placeholder="Search documents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 " />
          <button
            type="button"
            onClick={() => handleSearch(searchQuery)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
          ></button>
        </div>
      </div>
      {loading && <Loading2 />}

      <div className="space-y-4">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-3">
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-800 truncate">{doc}</h3>
                <p className="text-sm text-gray-500">Uploaded on 2025</p>
                <a
                  href={`https://xfytapjpgmvbtowkpizl.supabase.co/storage/v1/object/public/amk_ideation/${doc}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-purple-600 hover:text-purple-500"
                >
                  View Document
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {documents.length === 0 && (
        <div className="text-center text-gray-500 mt-8">No documents found</div>
      )}
    </div>
  );
}
