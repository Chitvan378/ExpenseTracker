import _ from 'lodash'

export function getSum(transaction, type){
    let sum = _(transaction).groupBy("type").map((obj, keys) => {
        if(!type) return _.sumBy(obj, 'amount');
        return {
            'type': keys,
            'color': obj[0].color,
            'total': _.sumBy(obj, 'amount')
        }
    }).value();
    return sum;
}

export function getLabels(transaction, type){
    let amount_sum = getSum(transaction, type);
    let Total = _.sum(getSum(transaction))
    let percent = _(amount_sum)
    .map(obj => _.assign(obj,{percent:(100*obj.total)/Total})).value();

    return percent
}

export function chart_data(transaction, custom){

    let bg = _.map(transaction, a => a.color);
    bg = _.uniq(bg);
    let datavalue = getSum(transaction)
    const config= {
        data:{
        datasets: [{
          data: datavalue,
          backgroundColor: bg,
          hoverOffset: 4
        }]
        },
        options:{
            cutout:100
        }
    }

    return custom ?? config;
}

export function getTotal(transaction){
    return _.sum(getSum(transaction ))
}