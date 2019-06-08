<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm6>
            <div>
                <SearchBar/>
            </div>
            <div>
                <v-tabs content-class="mt-3">
                    <v-tab>
                        관심상품
                    </v-tab>
                    <v-tab>
                        판매중
                    </v-tab>
                    <v-tab>
                        구매신청
                    </v-tab>
                    <v-tab-item>
                        <div id="product_data_list">
                            <ProductData
                                v-for="(bookname, price, seller_id) in items"
                                v-bind:bookname="bookname"
                                v-bind:price="price"
                                v-bind:seller_id="seller_id"
                                v-bind:key="bookname.id">
                            </ProductData>
                        </div>
                    </v-tab-item>
                    <v-tab-item>
                        <div id="product_data_list">
                            <ProductData
                                v-for="(bookname, price, seller_id) in items"
                                v-bind:bookname="bookname"
                                v-bind:price="price"
                                v-bind:seller_id="seller_id"
                                v-bind:key="bookname.id">
                            </ProductData>
                        </div>
                    </v-tab-item>
                    <v-tab-item>
                        <div id="product_data_list">
                            <ProductData
                                v-for="(bookname, price, seller_id) in items"
                                v-bind:bookname="bookname"
                                v-bind:price="price"
                                v-bind:seller_id="seller_id"
                                v-bind:key="bookname.id">
                            </ProductData>
                        </div>
                    </v-tab-item>
                </v-tabs>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>

import SearchBar from './components/SearchBar.vue'
export default {
  name: 'Search',
  components: {
    SearchBar
  },
  items: {
    bookname: 'test',
    price: 3000,
    seller_id: 12,
    id: 1
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
