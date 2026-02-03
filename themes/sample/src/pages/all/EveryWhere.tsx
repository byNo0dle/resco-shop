// This component is rendered on every page but we're keeping it empty
// to not interfere with the custom landing page design
export default function EveryWhere() {
  return null;
}

export const layout = {
  areaId: 'content',
  sortOrder: 100 // High sort order so it doesn't interfere
};
