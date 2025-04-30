function showVendorForm() {
    document.getElementById('vendor-form').style.display = 'block';
    document.getElementById('customer-form').style.display = 'none';
    window.scrollTo(0, document.body.scrollHeight);
}

function showCustomerForm() {
    document.getElementById('customer-form').style.display = 'block';
    document.getElementById('vendor-form').style.display = 'none';
    window.scrollTo(0, document.body.scrollHeight);
}
const type = new Typed('.multiple-text', {
    strings: ['Welcome To !'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
  });