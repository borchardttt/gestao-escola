import Swal from 'sweetalert2';

export default class SwalError  {
    constructor(messageError: string) {
        Swal.fire({
            title: 'Erro!',
            text: messageError
        });
    }
}
