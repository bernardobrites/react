import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";
import TabHeader from "../common/tab/tabHeader";
import TabContent from "../common/tab/tabContent";
import List from "./billingCycleList";
import Form from "./billingCycleForm";
import { init, create, update, remove } from "./billingCyclesActions";
class BillingCycle extends Component {
  componentWillMount() {
    this.props.init();
  }

  render() {
    return (
      <div>
        <ContentHeader
          title="Ciclos de Pagamento"
          small="Cadastro"
        ></ContentHeader>
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader
                label="Listar"
                icons="bars"
                target="tabList"
              ></TabHeader>
              <TabHeader
                label="Incluir"
                icons="plus"
                target="tabCreate"
              ></TabHeader>
              <TabHeader
                label="Alterar"
                icons="pencil"
                target="tabUpdate"
              ></TabHeader>
              <TabHeader
                label="Excluir"
                icons="trash-0"
                target="tabDelete"
              ></TabHeader>
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabList">
                <List></List>
              </TabContent>
              <TabContent id="tabCreate">
                <Form
                  onSubmit={this.props.create}
                  submitLabel="Incluir"
                  submitClass="primary"
                ></Form>
              </TabContent>
              <TabContent id="tabUpdate">
                <Form
                  onSubmit={this.props.update}
                  submitLabel="Alterar"
                  submitClass="info"
                ></Form>
              </TabContent>
              <TabContent id="tabDelete">
                <Form
                  onSubmit={this.props.remove}
                  readOnly={true}
                  submitLabel="Excluir"
                  submitClass="danger"
                ></Form>
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ init, create, update }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycle);
