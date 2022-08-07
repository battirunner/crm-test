define('custom:views/login', 'views/login', function (Dep) {

return Dep.extend({

// specify your custom template
template: 'custom:login',
events: {
'click a[data-action="showRegistrationRequest"]': function (e) {
this.showRegistrationRequest();
}
},
// specify your own custom values for any custom placeholders that you are including in the template
// in this example, a background image, company name, custom button for self-registration and captcha are included
landingPageData: {
backgroundImage: '{{/EspoCRM/test.png}}/',
companyName: 'SGVC',
selfRegistrationEnabled: true,
captchaEnabled: false
},

// include the custom values in the standard "data" function which will provide the placeholder values to the template
// the values for "logoSrc" and "showForgotPassword" are the standard values specified in the core login script
data: function () {
return{
logoSrc: this.getLogoSrc(),
showForgotPassword: this.getConfig().get('passwordRecoveryEnabled'),
companyName: this.landingPageData.companyName,
backgroundImage: this.landingPageData.backgroundImage,
selfRegistrationEnabled: this.landingPageData.selfRegistrationEnabled
};
},

// this is the function that will be triggered when the visitor clicks on the custom "Register" button
events: {
'submit #login-form': function (e) {
this.login();
return false;
},
'click a[data-action="showRegistrationRequest"]': function (e) {
this.showRegistrationRequest();
},
'click a[data-action="passwordChangeRequest"]': function (e) {
this.showPasswordChangeRequest();
}
},

showRegistrationRequest: function () {
Espo.Ui.notify(this.translate('pleaseWait', 'messages'));
this.createView('registrationRequest', 'custom:views/modals/registration-request', {
url: window.location.href
}, function (view) {
view.render();
Espo.Ui.notify(false);
});
}

});
});