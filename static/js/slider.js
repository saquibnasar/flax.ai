// const roadmap__collections = document.querySelector(".roadmap__collections");
// const roadmap__flow_container = document.querySelector(
//   ".roadmap__flow-container"
// );
// const roadmap__collections_collectionCards = document.querySelectorAll(
//   ".roadmap__collections .collection-card"
// );

// let count = 1;
// const roadmap__collections_collectionCard =
//   roadmap__collections_collectionCards[1];
// let scrollWidth = 0;
// roadmap__collections.scrollLeft = 0;
// let istrue = false;
// setInterval(() => {
//   if (
//     roadmap__flow_container.offsetWidth ===
//       roadmap__collections.scrollWidth - roadmap__collections.scrollLeft ||
//     istrue
//   ) {
//     if (roadmap__collections.scrollLeft === 0) {
//       istrue = false;
//     } else {
//       istrue = true;
//       setTimeout(() => {
//         roadmap__collections.scrollLeft = scrollWidth - 20;
//         scrollWidth = scrollWidth - 20;
//       }, 100);
//     }
//   } else {
//     if (roadmap__collections.scrollLeft === 0) {
//       setTimeout(() => {
//         roadmap__collections.scrollLeft = scrollWidth + 20;
//         scrollWidth = scrollWidth + 20;
//       }, 1000);
//     } else {
//       roadmap__collections.scrollLeft = scrollWidth + 20;
//       scrollWidth = scrollWidth + 20;
//     }
//   }
// }, 100);
