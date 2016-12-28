'use strict';

const store = require('../store');
//const app = require('./app');

const clear = (modal) => {
    setTimeout(function() {
        $(modal).modal('hide');
    }, 1500);
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
    console.log();
    $('.messages').text('Success');
    clear('#signUp');
    clear('#changePass');
};

const signOutSuccess = () => {
    $('.messages').text("You Are Signed Out.");
    clear('#sign-out-modal');
    $('.logo').show(500);
    $('#addShow').hide(500);
    $('#get-shows').hide(500);
    $('.title-display').hide();
    $('#addBox').hide();
    $(".bigMessage").hide();
    clear('#signOut');
};

const signInSuccess = (data) => {
    store.user = data.user;
    success(data);
    $('.logo').hide(500);
    $('#addShow').show(500);
    $('#get-shows').show(500);
    clearForm('.sign-in-form');

    //console.log(data);
};

const passSuccess = (data) => {
    $('.modal-success').text("Password Succesfully Changed.");
    clear('#change-password-modal');
};

const failure = (error) => {
    $('.messages').text('Failed. Please retry your email and password.');
    clear('#signIn');
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
