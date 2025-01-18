import { useState } from 'react';
import { Upload as UploadIcon } from 'lucide-react';

export function Upload() {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prev => [...prev, ...droppedFiles]);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...selectedFiles]);
    }
  };

  const handleUpload = async () => {
    const formData = new FormData();
    files.forEach(file => {
      formData.append('files', file);
    });

    try {
      // TODO: Replace with actual API endpoint
      setUploading(true);
      const response = await fetch('http://127.0.0.1:5000/upload', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        setFiles([]);
        setUploading(false);
      }
    } catch (error) {
      setUploading(false);
      console.error('Error uploading files:', error);
      alert('Error uploading files. Please try again.');
    }
  };

  return (
    <div className="p-6">
      {/* Loading */}
      {uploading && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 text-center">
            <p className="text-gray-600">Uploading files...</p>
          </div>
        </div>
      )}
      <h1 className="text-2xl font-bold text-white mb-6">Upload Documents</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center ${
            isDragging ? 'border-purple-500 bg-purple-50' : 'border-gray-300'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <UploadIcon className="w-12 h-12 mx-auto text-black mb-4" />
          <p className="text-gray-600 mb-4">
            Drag and drop your files here, or click to select files
          </p>
          <input
            type="file"
            multiple
            onChange={handleFileInput}
            className="hidden"
            id="fileInput"
          />
          <label
            htmlFor="fileInput"
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-500 transition-colors cursor-pointer"
          >
            Select Files
          </label>
        </div>

        {files.length > 0 && (
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Selected Files:</h2>
            <ul className="space-y-2">
              {files.map((file, index) => (
                <li key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                  <span className="text-gray-700">{file.name}</span>
                  <button
                    onClick={() => setFiles(files.filter((_, i) => i !== index))}
                    className="text-red-500 hover:text-red-600"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={handleUpload}
              className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors"
            >
              Upload Files
            </button>
          </div>
        )}
      </div>
    </div>
  );
}