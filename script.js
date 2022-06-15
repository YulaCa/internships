const students = [
  {
    name: 'Martin',
    lastName: 'Lant',
    marks: [9, 8, null, 7, 5],
  },
  {
    name: 'Francesco',
    lastName: 'Portus',
    marks: [5, 4, 2, 3, 2],
  },
  {
    name: 'Bill',
    lastName: 'Merdoc',
    marks: [10, null, null, null, 10],
  },
  {
    name: 'John',
    lastName: 'Entman',
    marks: [9, 8, 9, 7, 5],
  },
];

const container = document.getElementById('accordion');

students.forEach((student, idx) => {
  const card = document.createElement('div');
  card.classList = 'card-body';

  var count = 0;
  var average = 0;

  student.marks.forEach(mark =>{
     if(mark != null){
           average += mark;
           count +=1;
        } else {
            average += 0;
        }
     }
  )

  average /= count;


  const content = `
    <div class="card">
    <div class="card-header" id="heading-${idx}">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapse-${idx}" aria-expanded="true" aria-controls="collapse-${idx}">

         </button>
      </h5>
    </div>

    <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion">
      <div class="card-body">
        <h5>Name and Surname: ${student.name} ${student.lastName}</h5>
        <p>Quantity of visited lectures: ${count}</p>
        <p>Average grade: ${average}</p>
      </div>
    </div>
  </div>
  `
  document.querySelector('#header').innerHTML += content;
});

