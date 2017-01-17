'use strict';

const store = require('../store');
// const softwareTemplate = require('../templates/software.handlebars');
//const app = require('./app');

const clear = (modal) => {
    setTimeout(function() {
        $(modal).modal('hide');
    }, 1000);
    $(modal).on('hidden.bs.modal', function() {
        $(this).find("input,textarea,select").val('').end();
        $('.modal-success').text('');
    });
};

const clearForm = (selector) => {
    $(selector).find("input,textarea,select").val('').end();
};


const signUpSuccess = () => {
    $('.modal-success').text("You may Login now.");
    clear('#sign-up-modal');
};

const success = () => {
    $('.messages').text('Success');
    clear('#signUp');
    clear('#changePass');
};

const signInSuccess = (data) => {
    store.user = data.user;
    success(data);
    // clearForm('.sign-in-form');
    $('.modal-success').text("Congrats. You may begin adding to your list :)");
    clear('#sign-in-modal');
    $(document).ready(function() {
    $('.adder').show();
    $('.get-list').show();
    });
};

const signOutSuccess = () => {
    $('.modal-success').text("You Are Signed Out.");
    clear('#sign-out-modal');
    // $('.logo').show(500);
    $('.title-display').hide();
    $('#addBox').hide();
    $(".bigMessage").hide();
    clear('#signOut');
    // $(".modal").on("hidden.bs.modal", function(){
    $(document).ready(function() {
    $('.adder').hide();
    $('.get-list').hide();
});
    $(".listTable").html("");
};

const passSuccess = (data) => {
    $('.modal-success').text("Password Succesfully Changed.");
    clear('#change-password-modal');
};

const failure = (error) => {
    $('.modal-success').text('Oops - something went wrong. Please register or try to sign-in again.');
};


module.exports = {
    clear,
    clearForm,
    signUpSuccess,
    signInSuccess,
    signOutSuccess,
    passSuccess,
    failure,
    success,
};
