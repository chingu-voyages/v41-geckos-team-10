import React from 'react';

const AppStreak = ({ jobs }) => {
    let arr = [...jobs];
    arr.sort((a, b) => {
        let c = new Date(a.dateApplied);
        let d = new Date(b.dateApplied);
        return c < d ? 1 : -1;
    });

    let today = new Date();
    // Note: getMonth requires +1 because January = 0
    let currentDay = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
    
    // Returns the number of consecutive days that the user has applied for job, depending on the "Date Applied" recorded in the jobs database. The count begins from today, and searches back in time. 
    function currentStreak() {
        let count = 0;
        let todaysIndex = 0;

        for(let i=0; i<arr.length; i++) {

            // Finds the index of the application submitted today, if any. If it exists, the streak begins at 1. If an application was not submitted today, the streak remains at 0. Note, this is only required because currently the tracker allows you to record a job with a "Date Applied" as a future date.
            if(currentDay === arr[i].dateApplied) {
                count = 1;
                todaysIndex = i;

                // Compares the current date with the next date to see if they are consecutive. The difference between a day is 86,400,000ms. If they are consecutive, count is increased by 1. If not, the count is returned and the loop ends. 
                for(let j=todaysIndex; j<arr.length; j++) {
                    if(arr[j].dateApplied === arr[j+1].dateApplied) {
                        // if the applications are on the same date then do nothing and continue the loop.
                    } else if (Date.parse(arr[j].dateApplied) - Date.parse(arr[j+1].dateApplied) === 86400000) {
                        // if the applications are 1 day apart, increase the count by 1.
                        count++;
                    } else {
                        // if the applications aren't on the same day or consecutive days, end the loop and return the count.
                        return count;
                    }
                }
            }
        }
     
        return count;
    }

    return (
        <p>{currentStreak()}</p>
    )
}

export default AppStreak;