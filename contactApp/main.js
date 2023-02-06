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

  //METHODS
  // The user needs to be able to create new contacts
  // The user needs to be able to delete contacts.
  // There needs to be a search bar where the user can find existing contacts.
}

$("#addContactForm").hide();

//MAIN CONTACTS ARRAY
let contacts = [];
// let updatedList = [];
let searchResult;

function seedContacts() {
  contacts.push(new Contact("john", "doe", 1233556, "writers way"));
  contacts.push(new Contact("neil", "armstrong", 232344234, "space way"));
  contacts.push(new Contact("johny", "depp", 564323421, "actor way"));
  contacts.push(new Contact("wright", "brothers", 33434234, "fly way"));
  // contacts.push(new Contact("edmund", "hillary", 234542323, "mountain way"));
  // contacts.push(new Contact("tenzin", "norgi sherpa", 564321, "Nepali way"));
  // contacts.push(new Contact("peter", "parker", 23434345, "spider way"));
  // contacts.push(new Contact("clark", "kent", 90908798, "super way"));
}

$("addContactForm").hide();
$(".search-error").hide();
$(".addContact-error").hide();

seedContacts();

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

loadContacts(contacts);

//================= EVENT LISTENERS ============

//Remove default value on user click

$("input").on("focusin", function () {
  $(this).val("");
});

//TOGGLE APP HEADING
// $("#addContact").on("click", function () {
//   // $(this).toggle(css("color", "rgb(187, 187, 187)"); toogle color implement later
//   $(".contacts").toggle();
//   $("#addContactForm").toggle();
//   $(".search-error").hide();
//   $(".addContact-error").hide();
//   $(".search-bar").val("");
//   $(".search-form").toggle();

//   $(this).text() !== "search"
//     ? $(this).text("search")
//     : $(this).text("add_circle");
// });

//CREATE CONTACT
$(".createContact").on("click", function (event) {
  event.preventDefault();
  let $name = $("#name").val().trim();
  let $sname = $("#sname").val().trim();
  let $phone = parseInt($("#phone").val().trim());
  let $address = $("#address").val().trim();

  console.log(Number.isInteger($phone));

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

    $(".search-bar").val("");
    $(".search-form").show();
    $(".search-bar").show();
    $(".search-error").hide();
    $(".contacts").show();
    $("#addContactForm").hide();
  } else {
    //create a function to print error message on the screen
    $(".search-error").text('"Please enter all details correctly"');
    $(".search-error").toggle();
  }
});

// REMOVE CONTACT

$("ul").on("click", "span", function (event) {
  event.preventDefault();
  let $parent = $(this).parent().parent();
  // console.log($parent);
  let index = $parent.attr("id");
  let item = contacts[index];
  // console.log(item);
  contacts = contacts.filter((contact) => {
    return contact.name != item.name;
  });
  // contacts = updatedList;
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
// find if contact exists in the array
function search(str) {
  $(".search-error").hide();
  //trim will remove white space before or after while .split(/\s+/) will accept multiple special characters spaces, tabs, new lines
  let queryArray = str.trim().split(/\s+/);
  let qname = queryArray[0];
  let qsname = queryArray[1];
  // if (queryArray.length < 1) {
  //   $(".search-error").text('"Please enter full name"');
  //   $(".search-error").toggle();
  // } else {
  const result = contacts.filter(
    (contact) => contact.name === qname || contact.sname === qsname
  );
  searchResult = [];
  console.log(result);
  searchResult.push(...result);
  if (searchResult.length === 0) {
    $(".search-error").text('"No match found"');
    $(".search-error").show();
  } else {
    $(".contacts").show();
    $("#addContactForm").hide();
    loadContacts(searchResult);
  }
  // }
}

//**************************** SHORTCUTS */

$(".home-shortcut").on("click", function (e) {
  e.preventDefault();
  $(".home-icon").addClass("active");
  $(".add-icon").removeClass("active");
  console.log("Home shortcut clicked");
  $(".search-bar").val("");
  $(".search-form").show();
  $(".search-bar").show();
  $(".search-error").hide();
  $(".contacts").show();
  $("#addContactForm").hide();

  loadContacts(contacts);
});

$(".results-shortcut").on("click", function (e) {
  e.preventDefault();
  $(".add-icon").addClass("active");
  $(".home-icon").removeClass("active");
  $(".contacts").hide();
  $("#addContactForm").show();
  $(".search-bar").val("");
  $(".addContact-error").hide();
  $(".search-bar").val("");
  // $(".search-form").();
});
// if yes show the contact on the list
// if not mention that the contact cannot be found

//Things to be addressed now
// 1. clearing values when button is submitted
// 2. styles
// 3. checking if the program core can be made private using ifie
// 4. question is it okay to have two list to hold contacts ?
// 5. Event propagation was very helpful must surely go in the documentation for the project
// 6. Need to add a view all contacts button - perhaps just a reload implementation in the button will do
// 7. Start with the design in figma proceed with the next steps

//STYLES TO DO

// have default info in the input tags - DONE **
// figure out how to put icon inside the input tags - DONE ** suitable alternative found
// insert the plus sign next to the title and get the contact submission to show and hide - DONE

//REFACTORING

// May be think about breaking the function in smaller parts if possible.
// for example to capitalise the name
