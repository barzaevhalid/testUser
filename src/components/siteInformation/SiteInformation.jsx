import React from 'react';
import s from './siteInformation.module.css'
const SiteInformation = () => {
    return (
        <div className={s.siteInformation}>
            <div className={s.siteInformation__inner}>
                <div className={s.siteInformation__text}>
                    <h2 className={s.siteInformation__title}>О площадке</h2>
                    <div className={s.desc}>
                        <div className={s.border}>
                            <div className={s.first__border}></div>
                            <div className={s.second__border}></div>
                            <div className={s.three__border}></div>
                        </div>
                        <div className={s.desc__inner}>
                            <p className={s.text__top}>Современная площадка для проведения концертов и других мероприятий любой сложности.</p>
                            <p className={s.text__bot}>Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые решения под все основные задачи любого события, а также современное оборудование, соответствующее самым высоким мировым стандартам. </p>
                        </div>
                    </div>
                </div>
                <div className={s.concertRequest}>
                    <div className={s.concertRequest_title}>
                        Оставить заявку на проведение концерта
                    </div>
                    <form className={s.form}>
                        <textarea className={s.textArea} placeholder='Расскажите о вашем предложении '></textarea>
                        <div className={s.btn__wrap}><button type='submit'>Отправить</button></div>
                    </form>
                </div>
            </div>
            <div className={s.group}>
                <div className={s.group__inner}>
                    <h2 className={s.group_title}>О группе</h2>
                    <p className={s.group_text}>Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо. Группа образовалась в 2009 году и на данный момент состоит из Тайлера Джозефа и Джоша Дана. Коллектив самостоятельно выпустил два альбома: Twenty One Pilots в 2009 и Regional at Best в 2011.</p>
                </div>
            </div>
        </div>
    );
};

export default SiteInformation;