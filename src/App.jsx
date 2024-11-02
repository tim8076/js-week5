import { useEffect, useState } from 'react';
import './assets/scss/all.scss';
import TheInput from './components/TheInput';
import TheSelect from './components/TheSelect';
import TheTextarea from './components/TheTextarea';
import CardSpot from './components/CardSpot';
import { ticketObj } from './data/data';
import { validateForm } from './utils';
import mainImg from './images/main_img.png';
import logoImg from './images/logo.png';
import axios from 'axios';
function App() {
  const [travelList, setTravelList] = useState([]);
  const [ticket, setTicket] = useState(ticketObj);
  const [filterText, setFilerText] = useState('');
  const apiUrl = 'https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json';
  
  // 地區 select 下拉選單
  const areaList = [...new Set(travelList.map(spot => {
    return spot.area;
  }))]
  
  // 篩選後列表
  const filteredList = filterList(travelList);
  
  function filterList(travelList) {
    if (!filterText || filterText === '全部地區') return travelList;    
    return travelList.filter(spot => { 
      return spot.area === filterText;
    });
  }

  function handleInputChange(e) {
    let value = e.target.value;
    if(e.target.type === 'number') {
      value = Number(value);
    }
    setTicket({
      ...ticket,
      id: self.crypto.randomUUID(),
      [e.target.name]: value,
    });
  }

  function addTicket() {
    let errorMessage = validateForm(ticket);
    if (errorMessage) return alert(errorMessage);
    setFilerText('');
    setTravelList([
      ...travelList,
      ticket,
    ]);
    setTicket(ticketObj);
  }
  
  // 取得遠端資料
  async function getTravelListData() {
    try {
      const res = await axios.get(apiUrl);
      setTravelList(res.data.data);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getTravelListData();
  }, []);

  return (
    <>
      <div className="py-5 py-md-10 pt-lg-30 pb-lg-25">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="input-board shadow-main p-6 py-md-15 px-xl-24
                d-flex flex-column flex-md-row">
                <div className='w-100 w-lg-50 text-center me-lg-r3 mb-2 mb-lg-0'>
                  <img src={mainImg} alt="main_img"
                    className='input-board__img img-fluid'/>
                  <img src={logoImg} alt="logo-png"
                    className='img-fluid d-none d-lg-block'/>
                </div>
                <div className="w-100 w-lg-50">
                  <h1 className='fs-2 text-primary fw-bold pb-1 border-bottom border-primary border-3
                    mb-6 mb-lg-8'>
                    <i className="bi bi-plus-circle me-2"></i>
                    新增旅遊套票
                  </h1>
                  <TheInput id="name"
                    labelName="套票名稱"
                    type="text"
                    name="name"
                    placeholder="請填寫套票名稱"
                    value={ticket.name}
                    handleInputChange={handleInputChange}/>
                  <TheInput id="imgUrl"
                    labelName="圖片網址"
                    type="text"
                    name="imgUrl"
                    placeholder="請填寫圖片網址"
                    value={ticket.imgUrl}
                    handleInputChange={handleInputChange}/>
                  <TheSelect id="area"
                    labelName="景點地區"
                    name="area"
                    placeholder="請選擇景點地區"
                    value={ticket.area}
                    options={['台北', '台中', '高雄']}
                    handleInputChange={handleInputChange}/>
                  <TheInput id="price"
                    labelName="套票金額"
                    type="number"
                    name="price"
                    value={ticket.price}
                    placeholder="請填寫套票金額"
                    min={0}
                    handleInputChange={handleInputChange}/>
                  <TheInput id="group"
                    labelName="套票組數"
                    type="number"
                    name="group"
                    value={ticket.group}
                    placeholder="請填寫套票組數"
                    min={0}
                    handleInputChange={handleInputChange}/>
                  <TheInput id="rate"
                    labelName="套票星級"
                    type="number"
                    name="rate"
                    value={ticket.rate}
                    placeholder="請填寫套票星級"
                    min={1}
                    max={10}
                    handleInputChange={handleInputChange}/>
                  <TheTextarea id="description"
                    labelName="套票描述"
                    name="description"
                    placeholder="請填寫套票描述（限 100 字）"
                    value={ticket.description}
                    handleInputChange={handleInputChange}/>
                  <div className="text-end">
                    <button className='btn btn-primary py-r1 px-10 w-100 w-lg-auto'
                      type='button'
                      onClick={addTicket}>
                      新增套票
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 py-md-10 pt-lg-14 pb-lg-30 bg-gray-100">
        <div className="container">
          <div className="row align-items-center mb-6 mb-lg-13">
            <div className="col-md-3 offset-md-1 mb-2 mb-md-0">
              <select className="form-select"
                value={filterText}
                onChange={(e) => setFilerText(e.target.value)}>
                <option value="" disabled>地區搜尋</option>
                <option value="全部地區">全部地區</option>
                <option value="台南">台南</option>
                {
                  areaList.map(area => {
                    return <option value={area} key={area}>{area}</option>
                  })
                }
              </select>
            </div>
            <div className="col-md-6">
              <p className='text-center text-md-start'>
                本次搜尋共 {filteredList.length} 筆資料
              </p>
            </div>
          </div>
          <div className="row">
            { filteredList.length > 0 ? (
                filteredList.map(spot => {
                  return (
                    <div className="col-md-6 col-lg-4 mb-6 mb-lg-8" key={spot.id}>
                      <CardSpot {...spot}/>
                    </div>
                  )
                })
              ) : (
                <div className='text-center'>
                  <h3 className='mb-6'>查無此關鍵字資料</h3>
                  <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/no_found.png?raw=true"
                    alt="not-found-image"
                    className='img-fluid object-fit-cover'/>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
