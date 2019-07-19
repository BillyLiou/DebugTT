
/**
 * 此遇到問題為,ionic專案裡鍵盤會在input之間切換的時候往上彈,
 * 使用fromEvent監聽"顯示鍵盤"事件,然後訂閱事件裡面在訂閱"隱藏鍵盤"事件.
 * 讓tabs可以在鍵盤彈出時隱藏
 */



// function tabLayout() {
//     this.tabBar = document.querySelector('ion-tab-bar');
//     console.log('註冊');
//     const show$ = fromEvent(window, 'keyboardWillShow');
//     show$.subscribe(observer => {
//         console.log('顯示鍵盤');
//         this.tabBar.style.display = 'none';
//         fromEvent(window, 'keyboardWillHide').pipe(debounceTime(100), takeUntil(show$)).subscribe(observer => {
//             console.log('隱藏鍵盤');
//             this.tabBar.style.display = 'flex';
//         });
//     });
// }