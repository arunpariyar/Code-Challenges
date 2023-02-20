//Contact Class
class Contact {
  // Each contact should have a name, surname, phone number, and address.
  constructor(name, sname, phone, address) {
    this._name = name.toLowerCase();
    this._sname = sname.toLowerCase();
    this._phone = phone;
    this._address = address.toLowerCase();
  }
  //GETTERS
  get name() {
    return this._name;
  }
  get sname() {
    return this._sname;
  }
  get phone() {
    return this._phone;
  }
  get address() {
    return this._address;
  }
  //SETTERS
  set name(name) {
    this._name = name;
  }
  set surname(sname) {
    this._sname = sname;
  }
  set phone(num) {
    this._phone = num;
  }
  set address(address) {
    this._address = address;
  }
}

// sample contacts for the application
function seedContacts() {
  contacts.push(new Contact("john", "doe", 1233556, "writers way"));
  contacts.push(new Contact("neil", "armstrong", 232344234, "space way"));
  contacts.push(new Contact("wright", "brothers", 33434234, "fly way"));
}

//function that will take an array and list the contents to the webpage
function loadContacts(contacts) {
  //clearing all the html within the ul
  $("ul").html("");
  contacts.forEach((contact, index) => {
    let newContact = $("<li>").addClass("contact-list");
    let html = `
    <div class="contact-details">
      <div class="contact">
        <p class="contact-name">${contact.name[0].toUpperCase()}${contact.name.slice(
      1
    )} ${contact.sname[0].toUpperCase()}${contact.sname.slice(1)}</p>
        <p class="contact-phone-address"> +49 ${contact.phone} | ${
      contact.address
    }</p>
      </div>
      <span class="material-symbols-outlined removeContact">
delete_forever
</span>
      </div>
    </div>
    `;
    newContact.attr("id", index);
    newContact.html(html).appendTo("ul");
  });
}

// find if contact exists in the array
function search(str) {
  $(".search__error").hide();
  //trim will remove white space before or after while .split(/\s+/) will accept multiple special characters spaces, tabs, new lines
  let queryArray = str.trim().split(/\s+/);
  let qname = queryArray[0];
  let qsname = queryArray[1];

  const result = contacts.filter(
    (contact) => contact.name === qname || contact.sname === qsname
  );
  searchResult = [];
  console.log(result);
  searchResult.push(...result);
  if (searchResult.length === 0) {
    $(".search__error").text('"No match found"');
    $(".search__error").show();
  } else {
    $(".contacts").show();
    $(".contact-form").hide();
    loadContacts(searchResult);
  }
}

// ********************** Application on load *******************/

//Main contacts array
let contacts = [];

//Array for storing search results
let searchResult;
//At the start the apps search form is hidden and so is the error message.
$(".contact-form").hide();
$(".search__error").hide();

seedContacts();
loadContacts(contacts);

//================= EVENT LISTENERS ============

//Remove default value on user click
$("input").on("focusin", function () {
  $(this).val("");
});

//CREATE CONTACT
$(".contact-form__btn").on("click", function (event) {
  event.preventDefault();
  let $name = $("#name").val().trim();
  let $sname = $("#sname").val().trim();
  let $phone = parseInt($("#phone").val().trim());
  let $address = $("#address").val().trim();

  if (
    $name !== "" &&
    $sname !== "" &&
    Number.isInteger($phone) && // check $phone is a number
    $address !== ""
  ) {
    contacts.push(new Contact($name, $sname, $phone, $address));
    //resetting the value of the text input to empty string
    $("#name").val("");
    $("#sname").val("");
    $("#phone").val("");
    $("#address").val("");
    loadContacts(contacts);

    $(".search__bar").val("");
    $(".search").show();
    $(".search__bar").show();
    $(".search__error").hide();
    $(".contacts").show();
    $(".contact-form").hide();
  } else {
    //create a function to print error message on the screen
    $(".search__error").text('"Please enter all details correctly"');
    $(".search__error").toggle();
  }
});

// REMOVE CONTACT
$("ul").on("click", "span", function (event) {
  console.log();
  event.preventDefault();
  let $parent = $(this).parent().parent();
  // console.log($parent);
  let index = $parent.attr("id");
  let item = contacts[index];
  // console.log(item);
  contacts = contacts.filter((contact) => {
    return contact.name != item.name;
  });
  loadContacts(contacts);
});

//SEARCH FUNCTION
// get the search term | full name | first name | last name
$("#search").keypress(function (event) {
  if (event.which === 13) {
    event.preventDefault();
    let $searchTerm = $("#search").val().trim().toLowerCase();
    search($searchTerm);
  }
});

//**************************** SHORTCUTS */

$(".shortcut__home").on("click", function (e) {
  e.preventDefault();
  $(".home-icon").addClass("active");
  $(".add-icon").removeClass("active");
  $(".search__bar").val("");
  $(".search").show();
  $(".search__bar").show();
  $(".search__error").hide();
  $(".contacts").show();
  $(".contact-form").hide();
  loadContacts(contacts);
});

$(".shortcut__contact").on("click", function (e) {
  e.preventDefault();
  $(".add-icon").toggleClass("active");
  $(".home-icon").toggleClass("active");
  $(".contacts").hide();
  $(".contact-form").show();
  $(".search__bar").val("");
  $(".search__bar").val("");
});
