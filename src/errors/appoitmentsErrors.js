function AppoitmentStatusInvalid() {
    return {
        name: "AppoitmentStatusInvalid",
        message: "Appoitment status is not valid"
    };
  }

function AppoitmentScheduleUnavaiable() {
    return {
        name: "AppoitmentScheduleUnavaiable",
        message: "This schedule is not avaliable"
    };
  }
  

  function JustDoctorsConfirmAppoitment() {
    return {
        name: "JustDoctorsConfirmAppoitment",
        message: "Only doctors can confirm appointments"
    };
  }  



function AppoitmentNotBelongsThisDoctor() {
    return {
        name: "AppoitmentNotBelongsThisDoctor",
        message: "This appointment is not for the doctor logged in"
    };
  }
  
function ForbbidenCancelConfirmedAppoitment() {
    return {
        name: "ForbbidenCancelConfirmedAppoitment",
        message: "Confirmed appointment cannot be canceled"
    };
  }

export default{
    AppoitmentStatusInvalid,
    AppoitmentScheduleUnavaiable,
    JustDoctorsConfirmAppoitment,
    AppoitmentNotBelongsThisDoctor,
    ForbbidenCancelConfirmedAppoitment
}