// Override: Hide default search box - we have custom header in OnlyHomePage
export default function SearchBox() {
  return null;
}

export const layout = {
  areaId: 'headerMiddleRight',
  sortOrder: 5
};
