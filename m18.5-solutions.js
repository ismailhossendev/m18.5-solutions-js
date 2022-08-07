/* 
    Module 18.5:

    Note TODO: 

    ১. জাভাস্ক্রিপ্ট কি জিনিস এইটা কি জানো?
    1- JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.

    ২. জাভাস্ক্রিপ্ট কিভাবে কাজ করে সেটা কি জানো?
    2- JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.

    ৩. ভেরিয়েবল কি জিনিস?
    3- A JavaScript variable is simply a name of storage location.

    ৪. ভেরিয়েবল কিভাবে ডিক্লেয়ার করে 
    4- var varName = "value";

    ৫. ভেরিয়েবল এর মান কিভাবে চেইঞ্জ করে বা আপডেট করে। 
    5- varName = "New Value"

    ৬. কি কি ধরণের ভেরিয়েবল হয়। সেগুলা কি কি (হিন্টস: Numeric, String, Boolean)
    6- premetive 3- nummeric , String , Boolean ,Symbol ,BigInt , null , undifined

    ৭. জাভাস্ক্রিপ এ primitive and non primitive data types কি কি ? উদাহরণ হিসেবে বলো। 
    7- Primitive Data Types(Numbers,String,Boolean,Undefined,Null,symbol,bigInt) The Non-Primitive Data Types(Object,Array,Function,)

    ৮. ভেরিয়েবল এর নাম কিভাবে কিভাবে ডিক্লেয়ার করতে হয়। কোন কোন জিনিস নাম এ লেখা যাবে না। অর্থাৎ Variable এর naming convention সম্পর্কে বলো। 
    8- suggest camelCase 

    ৯. দুইটা ভেরিয়েবল এর মধ্যে =, -, *, /, % কিভাবে করে? 
    var number = num1 + num2

    ১০. শর্টহ্যান্ড গুলো জানতে হবে। বিশেষ করে +=, -=, *=, /= জানতে হবে। 

    ১১.. ++ এবং -- এর কাজ কি ? এইটা কি জানো। 
    11- ++ 1+ -- -1

    ১২ parseInt, parseFloat, toFixed এইগুলা কি করে?  
    12- parseInt = string to numeric kore - same - word fixed kore
*/

/* 
    ১৩. Array কি জিনিস। এইটা কিভাবে কাজ করে? কিভাবে Array ডিক্লেয়ার করতে হয় 
    13- var varName = [1,2,1,2,3,3,4,];

    ১৪. array এর মধ্যে কয়টা উপাদান (element) আছে সেটা কিভাবে বের করে 
    14- varName.length

    ১৫. array এর উপাদান গুলা এর পজিশন ( index) কিভাবে কাজ করে। কত দিয়ে শুরু হয়। এবং মান কিভাবে চেইঞ্জ হয়। 
    15- index start - 0 ) varName.indexof("value") ) varName[2] = 5 ;

    ১৬. কোন একটা উপাদানের index এর মান -১ বলতে কি বুঝায় 
    16- not found in array 

    ১৭. কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো 
    17- varName[2]

    ১৮. কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে 
    18- varName[2] = 5

    ১৯. একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো?
    19- varName.indexOf("value");

    ২০. ধরো, কোন একটা ইনডেক্স দিয়ে উপাদান খুঁজতে গেছো। কিন্তু সেটার মান না দিয়ে তোমাকে undefined দেখাচ্ছে। সেটা দেখে তুমি কি বুঝবে? (একটু গুগলে সার্চ দাও। আমরা কোর্স এ এইটা আলোচনা করিনি। তারপরেও চেষ্টা করে দেখো)

    ২১. কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে

    ২২. কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে

    ২৩. তুলনা কিভাবে করতে হয়। এইগুলার মানে কি: >, <, ==, !=, <=, >=, ===, !==, &&, ।। 
    24- > boro the soto  < soto theke boro , == soman soman , != o soman , <= soto theke boro or soman , >= boro theke soto or osoman , === soman soman , !== o somam(not equal ) , && sorto etaw mante hobe , || je kono ekta mante hobe 

    ২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০,000 টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 
    24- 

    var myBalance = 85000;
    if (myBalance => 80000) {
        console.log('i am buy a MacBook')
    }
    else if (myBalance => 60000) {
        console.log('i am buy a Gaming laptop ')
    }
    else if (myBalance => 40000) {
        console.log('i am buying a lenovo yoga laptop')
    }
    else if (myBalance => 20000) {
        console.log('i am buying a secend hand laptop')
    }
    else {
        console.log('i am vikhari buying a mobile phone')
    }

 */

/* 
    ২৫. আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 
    25- 
    for (var i = 0; i <= 39; i++){
    console.log(i,'আসকে আমার মন ভালো নেই');
	}

    ২৬. while লুপ কিভাবে কাজ করে 
    26- হোয়াইল লুপ একটি কন্ডিশন থাকে সেই কন্ডিশন যদি সঠিক হয় তাহলে সে কাজ করতে থাকে এবং যতক্ষণ কন্ডিশন শুরু হবে ততক্ষণ কাজ করবে  এবং কত করে বাড়বে সেটা সেট করে দিতে হয়  যখন কন্ডিশন সঠিক হবে না তখন সেটি বন্ধ হয়ে যাবে .
 	হোয়াইল লুপ এর জন্য একটি ভেরিয়েবল বাহিরে ডিক্লেয়ার করতে হয়  

    
    ২৭. for লুপ কিভাবে কাজ করে 
    27 - ফর লুপ ভিতরে কন্ডিশন দিয়ে দিতে হয় এবং ভেরিয়েবল ডিক্লেয়ার করতে হয় কত আকার বাড়বে সেটা সেট করে দিতে হয়  এবং কন্ডিশন যতক্ষণ  সঠিক থাকবে ততক্ষণ লোকটি চলতে থাকে.
    ২৮. while লুপ এর মধ্যে লুপ ভেরিয়েবল চেইঞ্জ না করলে কি সমস্যা হয়। 
    28- marke unlimited loop 
    
    ২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 
    29- var i = 58;
    while (98 >= i) {
        console.log(i)
        i++;
    }
    
    ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  
    
    ৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 
    31-
    for (var i = 581; 623 >= i; i += 2){
    console.log(i)
    }

    
    ৩২.while আর for loop এর মধ্যে পার্থক্য কি 
    33- all think are same just declaretion process diffarent 
    
    ৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 
    33-
    let myLearn = ['html', 'css', 'bootstrap', 'tailwind', 'js']
    for (let i = 0; i < myLearn.length; i++){
        let index = myLearn[i];
        console.log(index);
    }
    
    ৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 
    34- 
    var myPhones = ['nokia', 'samsung', 'maximus', 'oppo', 'apple', 'mi']
    var i = 0;
    while (i < myPhones.length) {
        let index = myPhones[i];
        i++
        console.log(index)
    }
    ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 
    35-
        for (let i = 30; i <= 86; i++){
        console.log(i)
        if (i === 40) {
            break;
        } 
    }
    
    ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 
    36-
        let myBooks = [500, 300, 200, 50, 400, 100, 20, 80, 99, 299, 399]

    for (let i = 0; i < myBooks.length; i++){
        let index = myBooks[i];
        if (index > 200) {
            continue 
        }
        console.log(index);
        
    }


*/

console.log(Math.round(12.96));
console.log(Math.floor(12.96));