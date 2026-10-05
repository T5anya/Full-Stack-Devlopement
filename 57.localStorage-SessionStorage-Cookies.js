
/* //localStorage-
aapke browser pe data save krna joki browser band hone pe bhi data delete nhi hota
Local Storage allows websites to store key-value pairs persistently in a user’s browser, even after the browser is closed and reopened. 
store kaise kre
fetch kaise kre
remove kaise kre
update kaise kre
5mb
sirf string save krta hai 
agar tum usmai value array  ya object save kr rahe ho toh vo shi se save nahi hota toh unko string bana ke save krte hai

aur tum JSON.stringify() ka use karke usko string mai convert krke save kro aur jab fetch kro tab JSON.parse() ka use karke usko wapis object ya array mai convert krlo
 */

//setitem-agar property nhi hoti hai toh bana deta hai aur agar hti hai toh update krdeta hai
//localStorage-store
localStorage.setItem("name","harsh");//save data to localStorage

//get 
const username=localStorage.getItem("name");//fetch data from localStorage
console.log(username);//harsh

//remove
//localStorage.removeItem("name");// remove the item

//clear all
//localStorage.clear()

//update
localStorage.setItem("name","tanya");

/* sessionStorage-
data temporarily store karta hai matlab tab band hua aur data gaya
Session Storage is a temporary storage feature in web browsers that saves data only while a tab is open. It allows web pages to store information that remains available even if the page is refreshed. However, once the tab or browser is closed, all stored data is automatically deleted.  
if used from console thenwill be deleted if the tab is closed
*/

sessionStorage.setItem("name","riya");

const riya=sessionStorage.getItem("name");
console.log(riya);

//sessionStorage.removeItem("name");

//sessionStorage.clear()

/* 
cookies-
ye bhi data store karta hai and aapka data browser ke cookies naam ke folder pe save hota hai aur ye cookies kam aur light data ke liye use hota hai
 In JavaScript, cookies are piece of data stored in the user's web browser. The cookies are stored in the key-value pair inside the browser. We can manipulate the cookies using cookie property of document object. We can set or store a cookie in key-value pair using the cookie property.
 Cookies have been around much longer than the Web Storage APIs and are primarily used for storing small pieces of data that need to be sent back to the server with each HTTP request. They can have an expiration date, and you can set options like path, domain, and security flags.
 Cookies are small pieces of data stored in a user’s browser, primarily used for session management, authentication, and tracking user activity. In order to recognize you and show you results according to your preferences, this website saves some information in your local system when you visit a particular website. 
 4kb
 jo bhi data save kroge vo page reload par automatically server ko bhej diya jata hai

Your server sends some data to the visitor's browser in the form of a cookie. The browser may accept the cookie. If it does, it is stored as a plain text record on the visitor's hard drive. Now, when the visitor arrives at another page on your site, the browser sends the same cookie to the server for retrieval. Once retrieved, your server knows/remembers what was stored earlier.

Cookies are a plain text data record of 5 variable-length fields −

Expires − The date the cookie will expire. If this is blank, the cookie will expire when the visitor quits the browser.

Domain − The domain name of your site.

Path − The path to the directory or web page that set the cookie. This may be blank if you want to retrieve the cookie from any directory or page.

Secure − If this field contains the word "secure", then the cookie may only be retrieved with a secure server. If this field is blank, no such restriction exists.

Name=Value − Cookies are set and retrieved in the form of key-value pairs

 
JavaScript can manipulate cookies using the cookie property of the Document object. JavaScript can read, create, modify, and delete the cookies that apply to the current web page.

The simplest way to create a cookie is to assign a string value to the document.cookie object, which looks like this.

document.cookie = "key1 = value1;key2 = value2;expires = date";

Setting a Cookie:
// Set a cookie that expires in 7 days
const setCookie = (name, value, days) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
};
setCookie('user', 'Bob', 7);

Getting a Cookie:
// Retrieve a cookie value by name
const getCookie = (name) => {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let cookie of cookieArray) {
    cookie = cookie.trim();
    if (cookie.indexOf(cname) === 0) {
      return cookie.substring(cname.length, cookie.length);
    }
  }
  return "";
};

console.log(getCookie('user')); // Outputs: Bob
Deleting a Cookie:
    // To delete a cookie, set its expiry date to a past date
    const deleteCookie = (name) => {
      document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    };

    deleteCookie('user');

*/
