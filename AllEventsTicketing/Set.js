function Set() {


    this.intersection = function (listA, listB) {

        var resultList = new Array();

        if (listA === null || listB === null) {
            return null;
        }

        for (var i = 0; i < listA.length; i++) {
            var nextValue = listA[i];

            for (var j = 0; j < listB.length; j++) {
                if (listB[j] === nextValue) {
                    resultList.push(listB[j]);
                    break;
                }
            }
        }

        return resultList;
    }


    this.union = function (listA, listB) {
        var list1 = this.symmetricDifference(listA, listB);
        var list2 = this.intersection(listA, listB);


        var resultList = list1.concat(list2);
        return resultList;
    }


    this.relativeComplement = function (listA, listB) {

        var resultList = new Array();

        if (listA === null || listB === null) {
            return null;
        }

        for (var i = 0; i < listA.length; i++) {
            var nextValueA = listA[i];

            for (var j = 0; j < listB.length; j++) {
                var nextValueB = listB[j];
                if (nextValueA === nextValueB) {

                    break;
                }
            }
            if (nextValueA !== nextValueB) {
                resultList.push(nextValueA);
            }
        }

        return resultList;
    }


    this.symmetricDifference = function (listA, listB) {
        var list1 = this.relativeComplement(listA, listB);
        var list2 = this.relativeComplement(listB, listA);


        var resultList= list1.concat(list2);
        return resultList;
    }
}
