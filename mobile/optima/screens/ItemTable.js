import React from "react";
import { View, StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";
import Header from "../components/Header.component";
import HeaderWithBack from "../components/HeaderWithBack.component";
import { icons, COLORS, SIZES, FONTS } from "../constans";

const optionsPerPage = [2, 3, 4];

const ItemTable = (props) => {
  const title = props.route.params;
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
  return (
    <View>
      <Header title={"Inventory"} />
      <HeaderWithBack
        text={title}
        iconLeft={"arrow-left"}
        iconRight={"plus"}
        // textColor={COLORS.primary}
        iconsColor={COLORS.black}
        isEnabled={"0"}
      />
      <View style={styles.container}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>ID</DataTable.Title>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title>UOM</DataTable.Title>
            <DataTable.Title numeric>Quantity</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>1</DataTable.Cell>
            <DataTable.Cell>Mahavali Sand</DataTable.Cell>
            <DataTable.Cell>Cubes</DataTable.Cell>
            <DataTable.Cell numeric>33</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>2</DataTable.Cell>
            <DataTable.Cell>Mahavali Sand</DataTable.Cell>
            <DataTable.Cell>Cubes</DataTable.Cell>
            <DataTable.Cell numeric>33</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>3</DataTable.Cell>
            <DataTable.Cell>Mahavali Sand</DataTable.Cell>
            <DataTable.Cell>Cubes</DataTable.Cell>
            <DataTable.Cell numeric>33</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>4</DataTable.Cell>
            <DataTable.Cell>Mahavali Sand</DataTable.Cell>
            <DataTable.Cell>Cubes</DataTable.Cell>
            <DataTable.Cell numeric>33</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>5</DataTable.Cell>
            <DataTable.Cell>Mahavali Sand</DataTable.Cell>
            <DataTable.Cell>Cubes</DataTable.Cell>
            <DataTable.Cell numeric>33</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Pagination
            page={page}
            numberOfPages={3}
            onPageChange={(page) => setPage(page)}
            label="1-2 of 6"
            optionsPerPage={optionsPerPage}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            showFastPagination
            optionsLabel={"Rows per page"}
          />
        </DataTable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: 100,
    paddingHorizontal: 10,
    borderRadius: 8,
    margin: 20,
    backgroundColor: "white",
  },
});

export default ItemTable;
