import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
     goals:Goal[] = [
      new Goal(1,'Studying with Moringa lms canvas','Practice some coding skills', new Date(2020,10,7)),
      new Goal(2,'Farm duties','Help out in the farm and also add to my skillset',new Date(2020,5,30)),
      new Goal(3,'Evening jogging','Keep fit for body growth', new Date(2040,6,20)),
      new Goal(4,'Netflix and chill','Sit back, relax and enjoy',new Date(2020,8,10)),
      new Goal(5,'Study the Great Compromise by Greg Laurie','Strengthen my Christianity ', new Date(2020,6,21)),
      new Goal(6,'Wash dishes','Help out in doing chores', new Date(2020,7,15))
     ]
     toggleDetails(index){
      this.goals[index].showDescription = !this.goals[index].showDescription;
    }
    deleteGoal(isComplete, index){
      if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
     
      if(toDelete) {this.goals.splice(index,1)
      }
    
    }
    }
  constructor() {}
  ngOnInit(): void {
  }

}
