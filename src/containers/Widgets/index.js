import React, { Component } from 'react';
import { Row, Col } from 'antd';
import basicStyle from '../../config/basicStyle';
import IsoWidgetsWrapper from './widgets-wrapper';
import IsoWidgetBox from './widget-box';
import CardWidget from './card/card-widgets';
import ProgressWidget from './progress/progress-widget';
import StickerWidget from './sticker/sticker-widget';
import SaleWidget from './sale/sale-widget';
import * as rechartConfigs from '../Charts/recharts/config';
import { StackedAreaChart } from '../Charts/recharts/charts/';
import IntlMessages from '../../components/utility/intlMessages';



export default class IsoWidgets extends Component {
  render() {
    const { rowStyle, colStyle } = basicStyle;
    const wisgetPageStyle = {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'flex-start',
      padding: '15px',
      overflow: 'hidden'
    };

    const stackConfig = {
      ...rechartConfigs.StackedAreaChart,
      width: window.innerWidth < 450 ? 300 : 500
    };
    return (
      <div style={wisgetPageStyle}>
        <Row style={rowStyle} gutter={0} justify="start">
          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sticker Widget */}
              <StickerWidget
                number={<IntlMessages id="widget.stickerwidget1.number" />}
                text={"Total Users"}
                icon="ion-android-home"
                fontColor="#ffffff"
                bgColor="#7266BA"
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sticker Widget */}
              <StickerWidget
                number={<IntlMessages id="widget.stickerwidget1.number" />}
                text={"Premium Users"}
                icon="ion-android-star"
                fontColor="#ffffff"
                bgColor="#42A5F6"
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sticker Widget */}
              <StickerWidget
                number={<IntlMessages id="widget.stickerwidget1.number" />}
                text={"Today Users"}
                icon="ion-android-sunny"
                fontColor="#ffffff"
                bgColor="#7ED320"
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sticker Widget */}
              <StickerWidget
                number={<IntlMessages id="widget.stickerwidget1.number" />}
                text={"Today Premium Users"}
                icon="ion-android-star"
                fontColor="#ffffff"
                bgColor="#F75D81"
              />
            </IsoWidgetsWrapper>
          </Col>
        </Row>

        <Row style={rowStyle} gutter={0} justify="start">
          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sale Widget */}
              <SaleWidget
                label={<IntlMessages id="widget.salewidget1.label" />}
                price={<IntlMessages id="widget.salewidget1.price" />}
                details={<IntlMessages id="widget.salewidget1.details" />}
                fontColor="#F75D81"
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sale Widget */}
              <SaleWidget
                label={<IntlMessages id="widget.salewidget2.label" />}
                price={<IntlMessages id="widget.salewidget2.price" />}
                details={<IntlMessages id="widget.salewidget2.details" />}
                fontColor="#F75D81"
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sale Widget */}
              <SaleWidget
                label={<IntlMessages id="widget.salewidget3.label" />}
                price={<IntlMessages id="widget.salewidget3.price" />}
                details={<IntlMessages id="widget.salewidget3.details" />}
                fontColor="#F75D81"
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sale Widget */}
              <SaleWidget
                label={<IntlMessages id="widget.salewidget4.label" />}
                price={<IntlMessages id="widget.salewidget4.price" />}
                details={<IntlMessages id="widget.salewidget4.details" />}
                fontColor="#F75D81"
              />
            </IsoWidgetsWrapper>
          </Col>
        </Row>

        <Row style={rowStyle} gutter={0} justify="start">
          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper gutterBottom={20}>
              {/* Card Widget */}
              <CardWidget
                icon="ion-android-chat"
                iconcolor="#42A5F5"
                number={<IntlMessages id="widget.cardwidget1.number" />}
                text={<IntlMessages id="widget.cardwidget1.text" />}
              />
            </IsoWidgetsWrapper>

            <IsoWidgetsWrapper gutterBottom={20}>
              {/* Card Widget */}
              <CardWidget
                icon="ion-music-note"
                iconcolor="#F75D81"
                number={<IntlMessages id="widget.cardwidget2.number" />}
                text={<IntlMessages id="widget.cardwidget2.text" />}
              />
            </IsoWidgetsWrapper>

            <IsoWidgetsWrapper>
              {/* Card Widget */}
              <CardWidget
                icon="ion-trophy"
                iconcolor="#FEAC01"
                number={<IntlMessages id="widget.cardwidget3.number" />}
                text={<IntlMessages id="widget.cardwidget3.text" />}
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper gutterBottom={20}>
              {/* Progress Widget */}
              <ProgressWidget
                label={<IntlMessages id="widget.progresswidget1.label" />}
                details={<IntlMessages id="widget.progresswidget1.details" />}
                icon="ion-archive"
                iconcolor="#4482FF"
                percent={50}
                barHeight={7}
                status="active"
              />
            </IsoWidgetsWrapper>

            <IsoWidgetsWrapper gutterBottom={20}>
              {/* Progress Widget */}
              <ProgressWidget
                label={<IntlMessages id="widget.progresswidget2.label" />}
                details={<IntlMessages id="widget.progresswidget2.details" />}
                icon="ion-pie-graph"
                iconcolor="#F75D81"
                percent={80}
                barHeight={7}
                status="active"
              />
            </IsoWidgetsWrapper>

            <IsoWidgetsWrapper>
              {/* Progress Widget */}
              <ProgressWidget
                label={<IntlMessages id="widget.progresswidget3.label" />}
                details={<IntlMessages id="widget.progresswidget3.details" />}
                icon="ion-android-download"
                iconcolor="#494982"
                percent={65}
                barHeight={7}
                status="active"
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={12} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <IsoWidgetBox height={455}>
                <StackedAreaChart {...stackConfig} />
              </IsoWidgetBox>
            </IsoWidgetsWrapper>
          </Col>
        </Row>
      </div>
    );
  }
}
