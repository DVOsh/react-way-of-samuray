const TOGGLE_FRIENDSHIP = 'TOGGLE-IS-FRIEND';
const SET_USERS = 'SET-USERS';

let initialState = {
	usersData: [
		{
			id: 1, photoUrl: 'https://yandex-images.clstorage.net/z9DGR9333/eed132rgz/znbx1aegUgGYkzKumuZz7f4ia8R4Q5HeQ_z43GFYDSea7814xBNJZwBNKIYuUxCQDr5la5by_M7shZMbfWedBodm8MCWiVpgzeY2y8rGf_n2Vx7IPDL5zzeV8axMRARHou6RgC3ygfa5tLAuo6-k_VffMW6-i_H_UGiHgwGjGUcORtWRqygTgZSrP14-Jndl3puDxKA6NeufnDEA6KlAwhvj_aC1xuXaFWA4UndTdNW7U31eY5PlEzBB26tlR8XHAjrB2ftc1_3wo8--Zsbrec4rN7zUFuHL-3C1iGxNIPIXm53EgS7R-s1ovCKbh9TBEzv1ajuvlXPMyQ-zdVfBm4KeQS2vXH-JfC-_0uIij53Cl-PsfMqFa3v0uQj8vbgu709xXHEuJU5RsBAq_88ooberrb77b9EzBLk_87FHGavuEhGpazTPlaCPIxLy6ncxXg9PRDTKcc9_hAHAPNW0sl-_8TDtOs2WSbjotjPL2K1PU6k2A79Z62SBoxu5D7VbHgpFHYdA-5nIN6N2trL_dY5fs1TMdm1jm5hdtLAxqDrrJ1E4SeI9sqEcYBrzw4zJ2ydFVr-3NeMMXTfP2UMVswYKsYm3ZFtRbCcvWnJSjyFKa4dYIIrpJ5cYiUhwZbgWt6NJrMHe2e4NoBgiD2t4yWtzeZoDb-37-HW730WL1R-GPqW1d8QLfSgHHwoienOZdieHeCxyqedbUN2E2GWMxsfnPWyJ_rlCdbBc2htPTFXP643ej6v5e2xRm0Nhz-EHxvKxUTPMx230v-MKPir7wbbz49D8qj3rM2R9sPSpjF6Xv8nUBfo9Ou20_CrXB8QRi7NtSnMjqW9E2VfTzVPdrxo-yUkzdF8VYDdXLs7Gl102T8OYKL7JQ48E-aR8DTDqh5sdqBXWFZ7BJFg-j8OQFW-zrZ5v21Fz4FnbH8nPUatuqvHle9QLcZTn2wLSvlsxemuf1HCyEe_znK0IzAkg',
			fullName: 'Daniel', status: 'I am a boss', location: { city: 'Luhansk', country: 'Russia', }, isFriend: false,
		},
		{
			id: 2, photoUrl: 'https://yandex-images.clstorage.net/z9DGR9333/eed132rgz/znbx1aegUgGYkzKumuZz7f4ia8R4Q5HeQ_z43GFYDSea7814xBNJZwBNKIYuUxCQDr5la5by_M7shZMbfWedBodm8MCWiVpgzeY2y8rGf_n2Vx7IPDL5zzeV8axMRARHou6RgC3ygfa5tLAuo6-k_VffMW6-i_H_UGiHgwGjGUcORtWRqygTgZSrP14-Jndl3puDxKA6NeufnDEA6KlAwhvj_aC1xuXaFWA4UndTdNW7U31eY5PlEzBB26tlR8XHAjrB2ftc1_3wo8--Zsbrec4rN7zUFuHL-3C1iGxNIPIXm53EgS7R-s1ovCKbh9TBEzv1ajuvlXPMyQ-zdVfBm4KeQS2vXH-JfC-_0uIij53Cl-PsfMqFa3v0uQj8vbgu709xXHEuJU5RsBAq_88ooberrb77b9EzBLk_87FHGavuEhGpazTPlaCPIxLy6ncxXg9PRDTKcc9_hAHAPNW0sl-_8TDtOs2WSbjotjPL2K1PU6k2A79Z62SBoxu5D7VbHgpFHYdA-5nIN6N2trL_dY5fs1TMdm1jm5hdtLAxqDrrJ1E4SeI9sqEcYBrzw4zJ2ydFVr-3NeMMXTfP2UMVswYKsYm3ZFtRbCcvWnJSjyFKa4dYIIrpJ5cYiUhwZbgWt6NJrMHe2e4NoBgiD2t4yWtzeZoDb-37-HW730WL1R-GPqW1d8QLfSgHHwoienOZdieHeCxyqedbUN2E2GWMxsfnPWyJ_rlCdbBc2htPTFXP643ej6v5e2xRm0Nhz-EHxvKxUTPMx230v-MKPir7wbbz49D8qj3rM2R9sPSpjF6Xv8nUBfo9Ou20_CrXB8QRi7NtSnMjqW9E2VfTzVPdrxo-yUkzdF8VYDdXLs7Gl102T8OYKL7JQ48E-aR8DTDqh5sdqBXWFZ7BJFg-j8OQFW-zrZ5v21Fz4FnbH8nPUatuqvHle9QLcZTn2wLSvlsxemuf1HCyEe_znK0IzAkg',
			fullName: 'Roman', status: 'I am a boss too', location: { city: 'Krasny Luch', country: 'LNR', }, isFriend: true,
		},
		{
			id: 3, photoUrl: 'https://yandex-images.clstorage.net/z9DGR9333/eed132rgz/znbx1aegUgGYkzKumuZz7f4ia8R4Q5HeQ_z43GFYDSea7814xBNJZwBNKIYuUxCQDr5la5by_M7shZMbfWedBodm8MCWiVpgzeY2y8rGf_n2Vx7IPDL5zzeV8axMRARHou6RgC3ygfa5tLAuo6-k_VffMW6-i_H_UGiHgwGjGUcORtWRqygTgZSrP14-Jndl3puDxKA6NeufnDEA6KlAwhvj_aC1xuXaFWA4UndTdNW7U31eY5PlEzBB26tlR8XHAjrB2ftc1_3wo8--Zsbrec4rN7zUFuHL-3C1iGxNIPIXm53EgS7R-s1ovCKbh9TBEzv1ajuvlXPMyQ-zdVfBm4KeQS2vXH-JfC-_0uIij53Cl-PsfMqFa3v0uQj8vbgu709xXHEuJU5RsBAq_88ooberrb77b9EzBLk_87FHGavuEhGpazTPlaCPIxLy6ncxXg9PRDTKcc9_hAHAPNW0sl-_8TDtOs2WSbjotjPL2K1PU6k2A79Z62SBoxu5D7VbHgpFHYdA-5nIN6N2trL_dY5fs1TMdm1jm5hdtLAxqDrrJ1E4SeI9sqEcYBrzw4zJ2ydFVr-3NeMMXTfP2UMVswYKsYm3ZFtRbCcvWnJSjyFKa4dYIIrpJ5cYiUhwZbgWt6NJrMHe2e4NoBgiD2t4yWtzeZoDb-37-HW730WL1R-GPqW1d8QLfSgHHwoienOZdieHeCxyqedbUN2E2GWMxsfnPWyJ_rlCdbBc2htPTFXP643ej6v5e2xRm0Nhz-EHxvKxUTPMx230v-MKPir7wbbz49D8qj3rM2R9sPSpjF6Xv8nUBfo9Ou20_CrXB8QRi7NtSnMjqW9E2VfTzVPdrxo-yUkzdF8VYDdXLs7Gl102T8OYKL7JQ48E-aR8DTDqh5sdqBXWFZ7BJFg-j8OQFW-zrZ5v21Fz4FnbH8nPUatuqvHle9QLcZTn2wLSvlsxemuf1HCyEe_znK0IzAkg',
			fullName: 'Vika', status: 'I am a whore', location: { city: 'Kiev', country: 'Ukraine', }, isFriend: false,
		},
	],
};

export const toggleFriendshipAC = id => ({ type: TOGGLE_FRIENDSHIP, userId: id });
export const setUsersAC = users => ({ type: SET_USERS, users: users });

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_FRIENDSHIP:
			let usersArr = state.usersData.map(u => {
				if (u.id === action.userId) {
					return { ...u, isFriend: !u.isFriend }
				}
				return u;
			});
			return {
				...state,
				usersData: usersArr,
			};
		case SET_USERS:
			return {
				...state,
				usersData: [...state.usersData, ...action.users],
			}
		default: return state;
	};
};

export default usersReducer;

//console.log(usersReducer(initialState, toggleIsFriendAC(1)));