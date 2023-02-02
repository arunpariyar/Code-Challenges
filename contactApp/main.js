//Contact Class
class Contact {
  // Each contact should have a name, surname, phone number, and address.
  constructor(name, surname, phone, address) {
    this._name = name;
    this._surname = surname;
    this._phone = phone;
    this._address = address;
  }
  //GETTERS
  get name() {
    return this._name;
  }
  get surname() {
    return this._surname;
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

//MAIN CONTACTS ARRAY
let contacts = [];
let updatedList = [];

function loadContacts() {
  //clearing all the html within the ul
  $("ul").html("");
  contacts.forEach((contact, index) => {
    let newContact = $("<li>");
    let html = `<p>${contact.name} ${contact.surname}<p><button class="removeContact">remove</button>`;
    newContact.attr("id", index);
    newContact.html(html).appendTo("ul");
  });
}

loadContacts();

function deleteContact(id) {
  delete contacts[id];
  loadContacts();
}

//================= EVENT LISTENERS ============

//CREATE CONTACT
$(".createContact").on("click", function (event) {
  event.preventDefault();
  let $name = $("#name").val();
  let $sname = $("#sname").val();
  let $phone = $("#phone").val();
  let $address = $("#address").val();

  contacts.push(new Contact($name, $sname, $phone, $address));

  loadContacts();
});

// REMOVE CONTACT

$("ul").on("click", "button", function (event) {
  event.preventDefault();
  let $parent = $(this).parent().parent();
  console.log($parent);
  let index = $parent.attr("id");

  let item = contacts[index];

  console.log(item);

  contacts = contacts.filter((contact) => {
    return contact.name != item.name;
  });

  // contacts = updatedList;
  loadContacts();
});

//Things to be addressed now
// 1. clearing values when button is submitted
// 2. styles
// 3. checking if the program core can be made private using ifie
// 4. question is it okay to have two list to hold contacts ?
// 5. Event propagation was very helpful must surely go in the documentation for the project
