import React from 'react';

const DownloadButton = () => {
  const handleDownload = async () => {
    try {
      const pdfPath = '/portfolio/Vishal_Gautam_Resume.pdf';
      
      // Fetch the PDF file
      const response = await fetch(pdfPath);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Convert to blob
      const blob = await response.blob();
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Vishal_Gautam_Resume.pdf';
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. The resume file might be missing or there might be a network issue.');
      
      // Fallback: Try direct download
      const fallbackLink = document.createElement('a');
      fallbackLink.href = '/portfolio/Vishal_Gautam_Resume.pdf';
      fallbackLink.download = 'Vishal_Gautam_Resume.pdf';
      fallbackLink.target = '_blank';
      document.body.appendChild(fallbackLink);
      fallbackLink.click();
      document.body.removeChild(fallbackLink);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: 1000,
      background: 'white',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      border: '1px solid #e0e0e0'
    }}>
      <button 
        onClick={handleDownload}
        style={{
          padding: '12px 24px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        ⬇️ Download Resume
      </button>
    </div>
  );
};

export default DownloadButton;