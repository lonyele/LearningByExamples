export const onAlertClicked = (text: string) => (
  ev: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>
) => {
  alert(`${text} clicked~~~~~`);
  ev.preventDefault();
};
