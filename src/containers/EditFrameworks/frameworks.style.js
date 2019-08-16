import styled from 'styled-components';
import WithDirection from '../../config/withDirection';

const FrameWorks = styled.div`
	.eachcol {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: white;
		margin-top: 10px;
		margin-left: 7px;
		margin-right: 7px;
		padding-left: 20px;
		padding-right: 20px;
		border-radius: 10px;
	}
	.title {
		font-size: 20px;
		margin-top: 20px;
		color: #0000CD;
	}
	.inputbox {
		margin-top: 15px;
	}
	.clickButton {
		margin-top: 20px;
		border-radius: 10px;
		float: right;
	}
	.subSubmit {
		margin-bottom: 10px;
		border-radius: 10px;
		margin-top: 30px;
	}
	.itemBox {
		padding: 10px;
		width: 100%;
	}
	.itmesBox {
		border: 1px solid rgba(0,0,0, 0.3);
		border-radius: 10px;
		padding: 10px;
		margin-top: 20px;
		width: 100%;
	}
	.container {
		background: white;
		padding: 20px !important;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.metaWrapper {
		margin: 20px;
	}
	.metaDataBox {
		border: 1px solid rgba(0,0,0, 0.3);
		border-radius: 10px;
		padding: 10px;
		height: 217px;
		width: 100%;
		
		overflow-y: auto;
	}
	.datawrapper {
		width: 100%;
		margin-top: 10px;
	}
	.contentCol {
		padding-left: 10px !important;
	}
	.selectContent {
		display: flex;
		flex-direction: row;
		margin-top: 15px;
	}
	.contentButton {
		border-radius: 10px;
		margin-left: 20px;
	}
	.dataStructure {
		font-size: 18px;
		text-align: center;
		weight: 300;
	}
	.dataTitle {
		font-size: 16px;
		margin-left: 5px;
		color: blue;
	}
	.dataContent {
		margin-left: 15px;
	}
	.dataGroup {
		border: 1px solid #000000;
	}
	.backButton {
		border: none;
		color: red;
		margin-left: 10px;
		font-size: 18px;
	}
	.ChangeOk{
		background: blue;
		border-radius: 10px;
		color: white;
		margin-left: 20px;
	}
	.deleteButton {
		margin-top: 20px;
		border-radius: 10px;
		float: right;
		margin-right: 20px
	}
`

export default WithDirection(FrameWorks);
