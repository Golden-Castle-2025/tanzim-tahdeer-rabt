
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileUp, Loader2 } from "lucide-react";
import { useState } from "react";

interface FileUploaderProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (file: File) => void;
  isUploading: boolean;
  acceptedFileTypes: Record<string, string[]>;
  maxSize: number;
}

const FileUploader = ({ 
  isOpen, 
  onClose, 
  onUpload, 
  isUploading,
  acceptedFileTypes,
  maxSize
}: FileUploaderProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setError(null);

    if (!file) {
      setSelectedFile(null);
      return;
    }

    // Check file type
    const fileType = file.type;
    if (!Object.keys(acceptedFileTypes).includes(fileType)) {
      setError('نوع الملف غير مدعوم. يرجى تحميل ملف PDF.');
      setSelectedFile(null);
      return;
    }

    // Check file size
    if (file.size > maxSize) {
      setError(`حجم الملف كبير جدًا. الحد الأقصى هو ${maxSize / (1024 * 1024)} ميجابايت.`);
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
  };

  const handleSubmit = () => {
    if (selectedFile) {
      onUpload(selectedFile);
    }
  };

  const resetState = () => {
    setSelectedFile(null);
    setError(null);
  };

  const handleClose = () => {
    resetState();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-right">رفع وثيقة الاستراتيجية</DialogTitle>
          <DialogDescription className="text-right">
            يرجى تحميل وثيقة الاستراتيجية بصيغة PDF.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4 py-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 w-full text-center">
            <FileUp className="mx-auto h-12 w-12 text-gray-400" />
            <label className="block mt-4 cursor-pointer">
              <span className="mt-2 text-base text-gray-600 font-semibold">اختر ملف</span>
              <input
                type="file"
                className="hidden"
                accept=".pdf"
                onChange={handleFileChange}
                disabled={isUploading}
              />
            </label>
            {selectedFile && (
              <p className="mt-2 text-sm text-gray-500">
                {selectedFile.name}
              </p>
            )}
          </div>
          
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          
          <div className="flex justify-end gap-2 w-full">
            <Button
              variant="outline"
              onClick={handleClose}
              disabled={isUploading}
            >
              إلغاء
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!selectedFile || isUploading}
              className="bg-gov-blue hover:bg-gov-blue/90"
            >
              {isUploading ? (
                <>
                  <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                  جاري الرفع...
                </>
              ) : (
                "رفع الوثيقة"
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FileUploader;
