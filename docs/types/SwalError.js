import Swal from 'sweetalert2';
export default class SwalError {
    constructor(messageError) {
        Swal.fire({
            title: 'Erro!',
            text: messageError
        });
    }
}
//# sourceMappingURL=SwalError.js.map