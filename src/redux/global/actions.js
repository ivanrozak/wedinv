import { API_GET_PIB } from 'global/services/index';
import { PIB_PENCARIAN } from './types';

export const dataPencarian = (params) => ({
  type: PIB_PENCARIAN,
  payload: params,
});

// PENCAIRAN LEBIH LENGKAP
export const getFilteredPIB = (data) => async (dispatch) => {
  try {
    await API_GET_PIB.pencarian
      .getDataFiltered(data)
      .then((response) => {
        if (response && response.length > 0) {
          dispatch(
            dataPencarian({
              params: { name: 'resultFilteredData', val: response },
            })
          );
          dispatch(
            setNotification('success', 'Ditemukan!', 'Data Berhasil Ditemukan')
          );
        } else {
          dispatch(
            dataPencarian({ params: { name: 'resultFilteredData', val: [] } })
          );
          dispatch(setNotification('error', 'Gagal!', 'Data Tidak Ditemukan'));
        }
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(
          dataPencarian({ params: { name: 'resultFilteredData', val: [] } })
        );
        dispatch(setNotification('error', 'Gagal!', 'Data Tidak Ditemukan'));
      });
  } catch (error) {
    console.log(error.message);
    dispatch(
      dataPencarian({ params: { name: 'resultFilteredData', val: [] } })
    );
    dispatch(setNotification('error', 'Gagal!', 'Data Tidak Ditemukan'));
  }
};
