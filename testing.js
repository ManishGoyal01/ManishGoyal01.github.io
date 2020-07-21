var Application = angular.module('Testing', ['rzSlider','ui.bootstrap','ngSanitize','ui.select','ngAnimate']);

Application.filter('propsFilter', function() {
   return function(items, props) {
     var out = [];
 
     if (angular.isArray(items)) {
       var keys = Object.keys(props);
 
       items.forEach(function(item) {
         var itemMatches = false;
 
         for (var i = 0; i < keys.length; i++) {
           var prop = keys[i];
           var text = props[prop].toLowerCase();
           if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
             itemMatches = true;
             break;
           }
         }
 
         if (itemMatches) {
           out.push(item);
         }
       });
     } else {
       // Let the output be the input untouched
       out = items;
     }
 
     return out;
   };
 });
 
Application.controller('global',  [ "$scope","$timeout", function ($scope,$timeout) {
  $scope.oneAtATime = true;
  $scope.sampleEducation = [{ "Degree": "BE", "Institute": "Chitkara", "startDate": new Date('01/06/2010'), "endDate": new Date('01/05/2015'), "Percentage": "80" }];
  $scope.sampleDeveloping = {"value":5,"options":{"floor":0,"ceil":10,"step":1}}
  $scope.sampleDesigning = {"value":5,"options":{"floor":0,"ceil":10,"step":1}}
  $scope.sampleTesting = {"value":5,"options":{"floor":0,"ceil":10,"step":1}}
  $scope.users = [                                        // array of objects
    {
        id:0,"Name": "Ujwal Sethi", "Email": "Manishgoyal@siemens.com", "Phone": "816999170", "gender": "male", "age": CalculateAge('1999/01/07'), "date": new Date("01/07/1999"), "address": "Chandigarh","developing":$scope.sampleDeveloping,"testing":$scope.sampleTesting,"desgining":$scope.sampleDesigning,"flagForEducation":true, "languages": ["Hindi","English"], "Education": $scope.sampleEducation
    },
    {
      id:1,   "Name": "Hardik Singhal", "Email": "Anjaligoyal@siemens.com", "Phone": "816999170", "gender": "male", "age": CalculateAge('1998/01/07'), "date": new Date("01/07/1998"), "address": "Chandigarh","developing":$scope.sampleDeveloping,"testing":$scope.sampleTesting,"desgining":$scope.sampleDesigning,"flagForEducation":true,"languages": ["Hindi","English"], "Education": $scope.sampleEducation
    },
    {
      id:2,"Name": "Preeti", "Email": "Bhavyagoyal@siemens.com", "Phone": "816999170", "gender": "female", "age": CalculateAge('1990/01/07'), "date": new Date("01/07/1990"), "address": "Chandigarh","developing":$scope.sampleDeveloping,"testing":$scope.sampleTesting,"desgining":$scope.sampleDesigning,"flagForEducation":true, "languages": ["Hindi","English"], "Education": $scope.sampleEducation
    },
    {
      id:3,"Name": "Donald Trump", "Email": "Manishgoyal@siemens.com", "Phone": "816999170", "gender": "male", "age": CalculateAge('1989/01/07'), "date": new Date("01/07/1989"), "address": "Chandigarh","developing":$scope.sampleDeveloping,"testing":$scope.sampleTesting,"desgining":$scope.sampleDesigning,"flagForEducation":true, "languages": ["Hindi","English"], "Education": $scope.sampleEducation
    },
    {
      id:4,"Name": "harshit", "Email": "harshit@siemens.com", "Phone": "816999170", "gender": "male", "age": CalculateAge('1989/01/07'), "date": new Date("01/07/1989"), "address": "Chandigarh","developing":$scope.sampleDeveloping,"testing":$scope.sampleTesting,"desgining":$scope.sampleDesigning,"flagForEducation":true,"languages": ["Hindi","English"], "Education": $scope.sampleEducation
    },
    {
      id:5,"Name": "simar", "Email": "simar@siemens.com", "Phone": "816999170", "gender": "male", "age": CalculateAge('1989/01/07'), "date": new Date("01/07/1989"), "address": "Chandigarh","developing":$scope.sampleDeveloping,"testing":$scope.sampleTesting,"desgining":$scope.sampleDesigning,"flagForEducation":true,"languages": ["Hindi","English"], "Education": $scope.sampleEducation
    },
    {
      id:6,"Name": "kashish", "Email": "kashish@siemens.com", "Phone": "816999170", "gender": "male", "age": CalculateAge('1989/01/07'), "date": new Date("01/07/1989"), "address": "Chandigarh","developing":$scope.sampleDeveloping,"testing":$scope.sampleTesting,"desgining":$scope.sampleDesigning,"flagForEducation":true,"languages": ["Hindi","English"], "Education": $scope.sampleEducation
    },
    {
      id:7,"Name": "ankit", "Email": "ankit@siemens.com", "Phone": "816999170", "gender": "male", "age": CalculateAge('1989/01/07'), "date": new Date("01/07/1989"), "address": "Chandigarh","developing":$scope.sampleDeveloping,"testing":$scope.sampleTesting,"desgining":$scope.sampleDesigning,"flagForEducation":true,"languages": ["Hindi","English"], "Education": $scope.sampleEducation
    },
    {
      id:8,"Name": "nitish", "Email": "nitish@siemens.com", "Phone": "816999170", "gender": "male", "age": CalculateAge('1989/01/07'), "date": new Date("01/07/1989"), "address": "Chandigarh","developing":$scope.sampleDeveloping,"testing":$scope.sampleTesting,"desgining":$scope.sampleDesigning,"flagForEducation":true,"languages": ["Hindi","English"], "Education": $scope.sampleEducation
    },
    {
      id:9,"Name": "parikshit", "Email": "parikshit@siemens.com", "Phone": "816999170", "gender": "male", "age": CalculateAge('1989/01/07'), "date": new Date("01/07/1989"), "address": "Chandigarh","developing":$scope.sampleDeveloping,"testing":$scope.sampleTesting,"desgining":$scope.sampleDesigning,"flagForEducation":true,"languages": ["Hindi","English"], "Education": $scope.sampleEducation
    },
    {
      id:10,"Name": "aditya", "Email": "aditya@siemens.com", "Phone": "816999170", "gender": "male", "age": CalculateAge('1989/01/07'), "date": new Date("01/07/1989"), "address": "Chandigarh","developing":$scope.sampleDeveloping,"testing":$scope.sampleTesting,"desgining":$scope.sampleDesigning,"flagForEducation":true,"languages": ["Hindi","English"], "Education": $scope.sampleEducation
    },
    {
      id:11,"Name": "mathew", "Email": "mathew@siemens.com", "Phone": "816999170", "gender": "male", "age": CalculateAge('1989/01/07'), "date": new Date("01/07/1989"), "address": "Chandigarh","developing":$scope.sampleDeveloping,"testing":$scope.sampleTesting,"desgining":$scope.sampleDesigning,"flagForEducation":true,"languages": ["Hindi","English"], "Education": $scope.sampleEducation
    },
    {
      id:12,"Name": "akshay", "Email": "akshay@siemens.com", "Phone": "816999170", "gender": "male", "age": CalculateAge('1989/01/07'), "date": new Date("01/07/1989"), "address": "Chandigarh","developing":$scope.sampleDeveloping,"testing":$scope.sampleTesting,"desgining":$scope.sampleDesigning,"flagForEducation":true,"languages": ["Hindi","English"], "Education": $scope.sampleEducation
    },
    {
      id:13,"Name": "anjali", "Email": "anjali@siemens.com", "Phone": "816999170", "gender": "male", "age": CalculateAge('1989/01/07'), "date": new Date("01/07/1989"), "address": "Chandigarh","developing":$scope.sampleDeveloping,"testing":$scope.sampleTesting,"desgining":$scope.sampleDesigning,"flagForEducation":true,"languages": ["Hindi","English"], "Education": $scope.sampleEducation
    },
    {
      id:14,"Name": "kajal ", "Email": "kajal@siemens.com", "Phone": "816999170", "gender": "male", "age": CalculateAge('1989/01/07'), "date": new Date("01/07/1989"), "address": "Chandigarh","developing":$scope.sampleDeveloping,"testing":$scope.sampleTesting,"desgining":$scope.sampleDesigning,"flagForEducation":true,"languages": ["Hindi","English"], "Education": $scope.sampleEducation
    },
    {
      id:15,"Name": "ritu", "Email": "ritu@siemens.com", "Phone": "816999170", "gender": "male", "age": CalculateAge('1989/01/07'), "date": new Date("01/07/1989"), "address": "Chandigarh","developing":$scope.sampleDeveloping,"testing":$scope.sampleTesting,"desgining":$scope.sampleDesigning,"flagForEducation":true,"languages": ["Hindi","English"], "Education": $scope.sampleEducation
    },
    {
      id:16,"Name": "bharat ", "Email": "bharat@siemens.com", "Phone": "816999170", "gender": "male", "age": CalculateAge('1989/01/07'), "date": new Date("01/07/1989"), "address": "Chandigarh","developing":$scope.sampleDeveloping,"testing":$scope.sampleTesting,"desgining":$scope.sampleDesigning,"flagForEducation":true,"languages": ["Hindi","English"], "Education": $scope.sampleEducation
    },
    {
      id:17,"Name": "jhonny", "Email": "jhonny@siemens.com", "Phone": "816999170", "gender": "male", "age": CalculateAge('1989/01/07'), "date": new Date("01/07/1989"), "address": "Chandigarh","developing":$scope.sampleDeveloping,"testing":$scope.sampleTesting,"desgining":$scope.sampleDesigning,"flagForEducation":true,"languages": ["Hindi","English"], "Education": $scope.sampleEducation
    },
    {
      id:18,"Name": "golu", "Email": "golu@siemens.com", "Phone": "816999170", "gender": "male", "age": CalculateAge('1989/01/07'), "date": new Date("01/07/1989"), "address": "Chandigarh","developing":$scope.sampleDeveloping,"testing":$scope.sampleTesting,"desgining":$scope.sampleDesigning,"flagForEducation":true,"languages": ["Hindi","English"], "Education": $scope.sampleEducation
    },
    {
      id:19,"Name": "pawan", "Email": "pawan@siemens.com", "Phone": "816999170", "gender": "male", "age": CalculateAge('1989/01/07'), "date": new Date("01/07/1989"), "address": "Chandigarh","developing":$scope.sampleDeveloping,"testing":$scope.sampleTesting,"desgining":$scope.sampleDesigning,"flagForEducation":true,"languages": ["Hindi","English"], "Education": $scope.sampleEducation
    },
    {
      id:20,"Name": "naina", "Email": "naina@siemens.com", "Phone": "816999170", "gender": "male", "age": CalculateAge('1989/01/07'), "date": new Date("01/07/1989"), "address": "Chandigarh","developing":$scope.sampleDeveloping,"testing":$scope.sampleTesting,"desgining":$scope.sampleDesigning,"flagForEducation":true,"languages": ["Hindi","English"], "Education": $scope.sampleEducation
    },
    {
      id:21,"Name": "usha", "Email": "usha@siemens.com", "Phone": "816999170", "gender": "male", "age": CalculateAge('1989/01/07'), "date": new Date("01/07/1989"), "address": "Chandigarh","developing":$scope.sampleDeveloping,"testing":$scope.sampleTesting,"desgining":$scope.sampleDesigning,"flagForEducation":true,"languages": ["Hindi","English"], "Education": $scope.sampleEducation
    },
    


  ]
  $scope.uid = $scope.users.length;
  console.log("2",$scope.users.length);
  $scope.modalButtonText = "Add User"
  
  /* This block of code is used for pagination and pager options */
  $scope.viewby = 5;
  $scope.totalItems = $scope.uid;
  $scope.currentPage = 1;
  $scope.itemsPerPage = $scope.viewby;
 
  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
   
    console.log('Page changed to: ' + $scope.currentPage);
  };

$scope.setItemsPerPage = function(num) {
  $scope.itemsPerPage = num;
  $scope.currentPage = 1; //reset to first page
}


$scope.save = function (user) {
  
  if (user.id == null) {
      //if this is new user, add it in users array

      user.id = $scope.uid;
     user.age = CalculateAge(user.date);
      
     
      $scope.users.push(user);
      $scope.uid = $scope.users.length;
      $scope.totalItems = $scope.uid;
      $scope.count = $scope.uid;
      $scope.newUser = {} ;
      $("#addUSerModal").modal("toggle");                    

  } else {
      //for existing user, find this user using id
      //and update it.
      for (i in $scope.users) {
          if ($scope.users[i].id == user.id) {
            user.age = CalculateAge(user.date);
 

              $scope.users[i] = user;
          }
      }
      $("#addUSerModal").modal("toggle");                    

  }

}
$scope.edit = function(user)
{
//$scope.save(user);
// $timeout(function() {
//   $scope.$broadcast('rzSliderForceRender')
// $scope.edit();
// },0,false);
  $scope.popup.opened = false;
  $scope.modalButtonText = "Update User"
  $scope.newUser = user;
  $scope.Customer = $scope.newUser.Education;
  



  $("#addUSerModal").modal("show"); 
  
  $timeout(function() {
    $scope.$broadcast('rzSliderForceRender')
  },150);
  
 
                 
}





 

$scope.newUser={};
$scope.Add = function () {
  //Add the new item to the Array.
  var customer = {};
  customer.Degree = $scope.Degree;
  customer.Institute = $scope.Institute;
  customer.startDate = $scope.startDate;
  customer.endDate = $scope.endDate;
  customer.Percentage = $scope.Percentage;

 // $scope.Customers.push(customer);
  $scope.newUser.Education.push(customer); 
  $scope.newUser.flagForEducation = true;

  //Clear the TextBoxes.
  $scope.Degree = "";
  $scope.Institute = "";
  $scope.startDate = "";
  $scope.endDate = "";
  $scope.Percentage = "";

};

$scope.Remove = function (index) {
        
  $scope.newUser.Education.splice(index, 1);
  $scope.count = $scope.count - 1;
  $scope.totalItems = $scope.count;
};
$scope.accordianfunction = function(value)
{
  if(value == 1){
  $scope.developingtoggle= true;
  $scope.desginingtoggle = false;
  $scope.testingtoggle = false;}
  
  if(value == 2){
    $scope.developingtoggle= false;
    $scope.desginingtoggle = true;
    $scope.testingtoggle = false;}
    
  if(value == 3){
    $scope.developingtoggle= false;
    $scope.desginingtoggle = false;
    $scope.testingtoggle = true;}
}
// Chart.platform.disableCSSInjection = true;
// console.log("Chart.platform.disableCSSInjection", Chart.platform.disableCSSInjection)
// console.log(Chart)
var ctx = document.getElementById('myChart');
// console.log($scope.users)

(femaleData = []).length = 11; 
femaleData.fill(0);

(maleData = []).length = 11; 
maleData.fill(0);

$scope.users.forEach(function(p) {
   if (p.gender == 'female') {
     femaleData[Number(p.date.getMonth())] ++
   } else {
     maleData[Number(p.date.getMonth())] ++
   }
})

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: "Male",
            backgroundColor: "blue",
            data: maleData
          },
          {
            label: "Female",
            backgroundColor: "Pink",
            data: femaleData
          }
          // {
            
          //   data: [12, 19, 3,5,7,3,2,1,4,5],
          //   backgroundColor: [
          //       'rgba(255, 99, 132, 0.2)',
          //       'rgba(54, 162, 235, 0.2)',
          //       'rgba(255, 206, 86, 0.2)',
          //       'rgba(255, 206, 86, 0.2)',
          //       'rgba(255, 206, 86, 0.2)',
          //        'rgba(255, 206, 86, 0.2)',
          //        'rgba(255, 206, 86, 0.2)',
          //         'rgba(255, 206, 86, 0.2)',
          //        'rgba(255, 206, 86, 0.2)',
          //       'rgba(255, 206, 86, 0.2)',


          //   ],
          //   borderColor: [
          //       'rgba(255, 99, 132, 1)',
          //       'rgba(54, 162, 235, 1)',
          //       'rgba(255, 206, 86, 1)',
          //       'rgba(255, 206, 86, 1)',
          //       'rgba(255, 206, 86, 1)',
          //       'rgba(255, 206, 86, 1)',
          //       'rgba(255, 206, 86, 1)',
          //       'rgba(255, 206, 86, 1)',
          //       'rgba(255, 206, 86, 1)',
          //       'rgba(255, 206, 86, 1)',

          //   ],
          //   borderWidth: 1
        // }
      ]
    },
    options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
    // options: {
    //   responsive: true,
    //   maintainAspectRatio: false,
    //     scales: {
    //       xAxes: [{
    //         gridLines: {
    //           display: true
    //         }
    //       }],
          
    //         yAxes: [{
    //           gridLines: {
    //             display: true
    //           },
    //             ticks: {
    //                 beginAtZero: true
    //             }
    //         }]
    //     }
    // }
});


function CalculateAge(dateString) {

  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}
$scope.openmodal = function()
{
  $scope.newUser = {};
  $scope.newUser.Education = [];
  $scope.modalButtonText = "Add User"
  $scope.newUser.developing =
  {
    value: 0,
        options: {
            floor: 0,
            ceil: 10,
            step:1

  }
}
$scope.newUser.testing =
{
  value: 0,
      options: {
          floor: 0,
          ceil: 10,
          step:1

}
}
$scope.newUser.desgining =
{
  value: 0,
      options: {
          floor: 0,
          ceil: 10,
          step:1

}
}
 
  $("#addUSerModal").modal("show");                    
}

$scope.date = null;
$scope.datepickerOptions = {
  initDate: new Date()
};
$scope.open = function() {
  $scope.popup.opened = true;
};
$scope.popup = {
  opened: false
};
$scope.open1 = function() {
  $scope.popup1.opened = true;
};
$scope.popup1 = {
  opened: false
};
$scope.open2 = function() {
  $scope.popup2.opened = true;
};
$scope.popup2 = {
  opened: false
};
$scope.open3 = function() {
  $scope.popup3.opened = true;
};
$scope.popup3 = {
  opened: false
};
$scope.open4 = function() {
  $scope.popup4.opened = true;
};
$scope.popup4 = {
  opened: false
};

function dynamicSort(property) {
  var sortOrder = 1;

  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }

  return function (a,b) {
      if(sortOrder == -1){
          return b[property].localeCompare(a[property]);
      }else{
          return a[property].localeCompare(b[property]);
      }        
  }
}


sortTable = function (switchRow) {
  if ($scope.toggler == true) {
      
  $scope.users.sort(dynamicSort("Name"));
  }
  else if($scope.toggler == false)
  {
      $scope.users.sort(dynamicSort("-Name"));

  }
}
  
  sortTable1 = function (switchRow) {
    if ($scope.togglers == true) {
        
        $scope.users.sort(dynamicSort("Email"));
        }
        else if($scope.togglers == false)
        {
            $scope.users.sort(dynamicSort("-Email"));

        }
      }
      $scope.togglerss = false;
      sortTable2 = function (switchRow) {
        // var i = 0;
        if($scope.togglerss == false)
        {
         
        for(var i=0; i< $scope.users.length-1; i++)
        {for(var j=0 , stop=($scope.users.length-1) - i; j< stop; j++)
          {
            if ($scope.users[j].age < $scope.users[j+1].age) {
              var temp = $scope.users[j+1];
                   $scope.users[j+1] = $scope.users[j];
                    $scope.users[j] = temp
            }

          }
        

        }
      }
      if($scope.togglerss == true)
      {
        for(var i=0; i< $scope.users.length-1; i++)
        {for(var j=0 , stop=($scope.users.length-1) - i; j< stop; j++)
          {
            if ($scope.users[j].age > $scope.users[j+1].age) {
              var temp = $scope.users[j+1];
                   $scope.users[j+1] = $scope.users[j];
                    $scope.users[j] = temp
            }

          }
        

        }
     
    }
        
    }
    $scope.flagForEducation = true;
      $scope.Modal = function (dataFromTable) {
        $scope.modalData = {};                                       // declaring a new object for modal view.
        Object.assign($scope.modalData, dataFromTable)               // assigning the value from home page to modal.
        $scope.modalData.languages = $scope.modalData.languages.toString();
       $("#myModal").modal("show");
      }


      $scope.deleteModal = function (result) {
        $scope.modalToDelete = result;

        $("#delete").modal("show");

    }
    $scope.addRecipient = {}; 
$scope.availablelanguages = [];
    $scope.availablelanguages = ["Hindi", "English", "Punjabi", 'Telugu', 'Tamil', 'Chinese', 'Japanese', 'Urdu'];
    
    $scope.count = $scope.uid ;
    $scope.filter = function()
    {
      // var table = document.getElementById("tableHeader");
      // $scope.count = table.tBodies[0].rows.length;

      var totalRowCount = 0;
      var rowCount = 0;
      var table = document.getElementById("tableHeader");
      var rows = table.getElementsByTagName("tr")
      for (var i = 0; i < rows.length; i++) {
          totalRowCount++;
          if (rows[i].getElementsByTagName("td").length > 0) {
              rowCount++;
          }
      }
      $scope.count = rowCount;
    
      if($scope.searchText.length == 0)
      {
        $scope.count = $scope.uid;
      }
      $scope.totalItems = $scope.count;
      

    }
    $scope.deleteUser = function () {

      var index = $scope.users.indexOf($scope.modalToDelete);
      $scope.users.splice(index, 1);
      
      $scope.count = $scope.users.length;
      $scope.totalItems = $scope.users.length

  }
  $scope.softdeleteUser = function () {
      var index = $scope.users.indexOf($scope.modalToDelete);
      $scope.users[index].delete = 1;
      $scope.modalToDeleteSoft = $scope.modalToDelete;
      let row = document.getElementsByClassName("editDelete").innertext;
      $scope.modelDeleteText = "User Deleted";
  }


// console.log($scope.users,"DFg")
// $scope.users.forEach.sort(function(a.age, b.age) {
//   return a.age - b.age;
// });

// console.log($scope.users.age);













  }]);

