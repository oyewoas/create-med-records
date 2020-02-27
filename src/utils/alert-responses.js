import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  })

//Success Responses
const createRecordSucess = () => {
    Toast.fire({
        type: 'success',
        icon: 'success',
        title: 'Medical record created successfully'
      })
}




//Error Responses
const createRecordError = () => {
    Toast.fire({
        type: 'error',
        icon: 'error',
        title: 'Medical record creation Error'
      })
}



const successResponses = {
    create_record : createRecordSucess,
    
}

const errorResponses ={
    create_record: createRecordError,
}

const ALERT_RESPONSES = {
    successResponses,
    errorResponses
}

export default ALERT_RESPONSES