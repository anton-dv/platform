const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const mouth = months[date.getMonth()];
  const day = date.getDate();

  return `${mouth} ${day}, ${year}`;
}
