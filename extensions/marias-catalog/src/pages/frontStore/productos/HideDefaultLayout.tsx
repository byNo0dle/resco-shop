export default function HideDefaultLayout() {
  return (
    <style>{`
      .header { display: none !important; }
      footer.footer { display: none !important; }
      .content { padding: 0 !important; margin: 0 !important; }
      #app { width: 100%; }
    `}</style>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 1
};
