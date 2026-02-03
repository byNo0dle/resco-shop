// This component hides the default Evershop header and footer on the homepage
// since we have a custom landing page design

export default function HideDefaultLayout() {
  return (
    <style>{`
      /* Hide default Evershop header on homepage */
      .header {
        display: none !important;
      }

      /* Hide default Evershop footer on homepage */
      footer.footer {
        display: none !important;
      }

      /* Remove default content padding */
      .content {
        padding: 0 !important;
        margin: 0 !important;
      }

      /* Ensure our custom landing page takes full width */
      #app {
        width: 100%;
      }
    `}</style>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 1 // Load before other components
};
