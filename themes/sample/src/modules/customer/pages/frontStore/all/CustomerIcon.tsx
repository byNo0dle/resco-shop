// Override: Hide default customer icon - we have custom header in OnlyHomePage
export default function CustomerIcon() {
  return null;
}

export const layout = {
  areaId: 'headerMiddleRight',
  sortOrder: 10
};
