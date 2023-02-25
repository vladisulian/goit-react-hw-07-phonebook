// // import { nanoid } from 'nanoid';
// import { createAction, nanoid } from '@reduxjs/toolkit';

// export const addContact = createAction(
//   'contacts/addContact',
//   (name, number) => {
//     return {
//       payload: {
//         id: nanoid(),
//         name,
//         number,
//       },
//     };
//   }
// );
// export const deleteContact = createAction(
//   'contacts/deleteContact',
//   contactID => {
//     return {
//       payload: contactID,
//     };
//   }
// );
// export const setFilter = createAction('filter/setFilter', value => {
//   return {
//     payload: value.toLowerCase(),
//   };
// });
// console.log(addContact.type);

// // export const addContact = (name, number) => {
// //   return {
// //     type: 'contacts/addContact',
// //     payload: {
// //       id: nanoid(),
// //       name,
// //       number,
// //     },
// //   };
// // };

// // export const deleteContact = contactID => {
// //   return {
// //     type: 'contacts/deleteContact',
// //     payload: contactID,
// //   };
// // };

// // export const setFilter = value => {
// //   return {
// //     type: 'filter/setFilter',
// //     payload: value.toLowerCase(),
// //   };
// // };
