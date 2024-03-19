interface YourData {
    date: Date;
}

const data: YourData[] = [
    { date: new Date('2024-03-19'), /* other fields... */ },
    { date: new Date('2024-03-20'), /* other fields... */ },
    { date: new Date('2024-03-25'), /* other fields... */ },    
];

function filterByDay(data: YourData[], targetDay: number): YourData[] {
    return data.filter(item => item.date.getDate() === targetDay);
}

function filterByWeek(data: YourData[], targetWeek: number): YourData[] {
    const startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    startOfWeek.setDate(startOfWeek.getDate() + (targetWeek - 1) * 7);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6); 

    return data.filter(item => item.date >= startOfWeek && item.date <= endOfWeek);
}

function filterByMonth(data: YourData[], targetMonth: number): YourData[] {
    return data.filter(item => item.date.getMonth() === targetMonth - 1);
}

const filteredByDay = filterByDay(data, 19); 
const filteredByWeek = filterByWeek(data, 3);
const filteredByMonth = filterByMonth(data, 3);

console.log(filteredByDay);
console.log(filteredByWeek);
console.log(filteredByMonth);
