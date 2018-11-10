export const onAlertClicked = (text: string) => (
  ev: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
) => {
  alert(`${text} clicked~~~~~`);
  ev.preventDefault();
};
