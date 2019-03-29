import dateFns from 'date-fns';

export const daysArr = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
export const monthsArr = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

export function getMonthGrid( currentDate ) {
    // Six rows of sevel days = 42 calendar cells
    const totalCells = 42;

    // get current date
    const today = currentDate;

    // create needed variables
    const daysInMonth = dateFns.getDaysInMonth( today );
    const firstOfMonth = dateFns.startOfMonth( today );
    const lastOfMonth = dateFns.endOfMonth( today );
    const firstDayOfMonth = dateFns.getDay( firstOfMonth );
    const daysAfter = totalCells - ( daysInMonth + firstDayOfMonth );

    // create arrays of date objects needed
    // to create calendar cells
    const prevMonthArr = [];
    const monthArr = [];
    const nextMonthArr = [];

    // push into the arrays
    for( var i = firstDayOfMonth; i > 0; i-- ) {
        prevMonthArr.push( {
            date: dateFns.subDays( firstOfMonth, i )
        } );
    }

    for( var i = 0; i < daysInMonth; i++ ) {
        monthArr.push( {
            date: dateFns.addDays( firstOfMonth, i )
        } )
    }

    for( var i = 0; i < daysAfter; i++ ) {
        nextMonthArr.push( {
            date: dateFns.addDays( lastOfMonth, i + 1 )
        } )
    }

    // finally combine into single array
    const calendarArr = [ ...prevMonthArr, ...monthArr, ...nextMonthArr ]

    return calendarArr;
}
