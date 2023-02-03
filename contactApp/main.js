//Contact Class
class Contact {
  // Each contact should have a name, surname, phone number, and address.
  constructor(name, sname, phone, address) {
    this._name = name;
    this._sname = sname;
    this._phone = phone;
    this._address = address;
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

//MAIN CONTACTS ARRAY
let contacts = [];
// let updatedList = [];
let searchResult;

function seedContacts() {
  contacts.push(new Contact("john", "doe", 123456, "writers way"));
  contacts.push(new Contact("neil", "armstrong", 123456, "space way"));
  contacts.push(new Contact("johny", "depp", 564321, "actor way"));
}

seedContacts();

function loadContacts(contacts) {
  //clearing all the html within the ul
  $("ul").html("");
  contacts.forEach((contact, index) => {
    let newContact = $("<li>");
    let html = `<p>${contact.name} ${contact.sname}<p><button class="removeContact">remove</button>`;
    newContact.attr("id", index);
    newContact.html(html).appendTo("ul");
  });
}

loadContacts(contacts);

//================= EVENT LISTENERS ============

//CREATE CONTACT
$(".createContact").on("click", function (event) {
  event.preventDefault();
  let $name = $("#name").val().trim();
  let $sname = $("#sname").val().trim();
  let $phone = $("#phone").val().trim();
  let $address = $("#address").val().trim();

  contacts.push(new Contact($name, $sname, $phone, $address));
  //resetting the value of the text input to empty string
  $("#name").val(" ");
  $("#sname").val(" ");
  $("#phone").val(" ");
  $("#address").val(" ");

  loadContacts(contacts);
  console.log(contacts);
});

// REMOVE CONTACT

$("ul").on("click", "button", function (event) {
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
    let $searchTerm = $("#search").val().trim();
    search($searchTerm);
  }
});
// find if contact exists in the array
function search(str) {
  //trim will remove white space before or after while .split(/\s+/) will accept multiple special characters spaces, tabs, new lines
  let queryArray = str.trim().split(/\s+/);
  let qname = queryArray[0];
  let qsname = queryArray[1];
  console.log(qname, qsname);
  if (queryArray.length < 2) {
    console.log("please enter the full name");
  } else {
    const result = contacts.filter(
      (contact) => contact.name === qname && contact.sname === qsname
    );
    searchResult = [];
    console.log(result);
    searchResult.push(...result);
    if (searchResult.length === 0) {
      console.log("No match found please try again");
    } else {
      loadContacts(searchResult);
    }
  }
}
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

// May be think about breaking the function in smaller parts if possible.
