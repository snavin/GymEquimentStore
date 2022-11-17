// const bar = document.getElementById('bar');
// const close = document.getElementById('close');
// const nav = document.getElementById('navbar');

// if (bar) {
//     bar.addEventListener('click', () => {
//         nav.classList.add('active');
//     })
// }

// if (close) {
//     close.addEventListener('click', () => {
//         nav.classList.remove('active');
//     })
// }

// popup functionality

function openModal() {
    let x = document.getElementById("modalContainer");
    if (x.className === "modal-container") {
        x.className += " clicked-modal";
    } else {
        x.className = "modal-container";
    }
}

// Sweet Alert for confirmation

function confirmAlert() {

    Swal.fire({
        title: 'Do you want to reserve the item?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Reserve',
        denyButtonText: `Don't Reserve`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Reserved!', '', 'success')
            let x = document.getElementById("modalContainer");
            if (x.className === "modal-container") {
                x.className += " clicked-modal";
            } else {
                x.className = "modal-container";
            }
        } else if (result.isDenied) {
            Swal.fire('Item Not reserved', '', 'info')
            let x = document.getElementById("modalContainer");
            if (x.className === "modal-container") {
                x.className += " clicked-modal";
            } else {
                x.className = "modal-container";
            }
        }
    })
}


// Validations for the Reserve Form

function validationFunction() {
    let flag = [];
    let form = document.getElementById('form')
    let email = document.getElementById('emailID').value
    let phone = document.getElementById('phone').value
    let fillDetails = document.getElementById('fillDetails')
    let text = document.getElementById('text')
    let phoneValid = document.getElementById('phoneValid')
    let pattern = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;
    let phonePattern = /^\d{10}$/;

    if (email === '' && phone === '') {
       
        fillDetails.innerHTML = "Please fill in all details"
        fillDetails.style.color = '#ff0000'
    }
    else if (email === '' ) {
       
        fillDetails.innerHTML = "Please fill in email details"
        fillDetails.style.color = '#ff0000'
    }
    else if (phone===''){
       
        fillDetails.innerHTML = "Please fill in phone details"
        fillDetails.style.color = '#ff0000'
    }
    else {
        fillDetails.innerHTML="";
        if (phone.match(phonePattern)) {
            form.classList.add('valid');
            form.classList.remove('invalid');
            phoneValid.innerHTML = "Your Phone Number in valid";
            phoneValid.style.color = '#00ff00';
            fillDetails.innerHTML = "";
            flag = flag.filter(num=>num !==1);
           
        } else if(!phone.match(phonePattern) && phone !== "" ) {
            form.classList.remove('valid');
            form.classList.add('invalid');
            phoneValid.innerHTML = "Please Enter Valid Phone Number";
            phoneValid.style.color = '#ff0000';
            flag = [...flag,1];
        }

        if (email.match(pattern)) {
            form.classList.add('valid')
            form.classList.remove('invalid')
            text.innerHTML = "Your Email Address in valid";
            text.style.color = '#00ff00';
            fillDetails.innerHTML = ""
            flag = flag.filter(num=>num !==2);
        } else if (!email.match(pattern)) {
            form.classList.remove('valid')
            form.classList.add('invalid')
            text.innerHTML = "Please Enter Valid Email Address";
            text.style.color = '#ff0000';
            flag = [...flag,2];
        }

        if(flag.length === 0)
        {
            confirmAlert();
            form.reset();
            phoneValid.innerHTML = '';
            text.innerHTML = '';
            fillDetails.innerHTML = '';
        }
    
        if (email == '') {
            form.classList.remove('valid')
            form.classList.remove('invalid')
            text.innerHTML = ""
            text.style.color = '#00ff00'
        }
    }
}