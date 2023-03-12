package com.PizzaHut.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.PizzaHut.services.ImageHandlerService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/toppingImages")
public class toppingImgController {
	@Autowired
	private ImageHandlerService fileService;
	
	//add topping image
//	@PostMapping("/add/{toppingId}")
//	public ResponseEntity<?> addToppingImage(@PathVariable("toppingId") int toppingId,ToppingImageDto toppingImageDto){
//		try {
//			Map<String, Object> result = imgService.addToppingImage(toppingId, toppingImageDto);
//			if(!result.isEmpty()) {
//				return Response.success(result);
//			}else {
//				return Response.error("No Item Found");
//			}
//		} catch (Exception e) {
//			return Response.error(e.getMessage());
//		}
//	}
	
	@PostMapping(value = "/addtoppingthumbnail/{toppingId}", consumes = "multipart/form-data")
	public ResponseEntity<?> addItemImage(@RequestBody MultipartFile imageFile, @PathVariable Integer toppingId)
			throws IOException {
		return new ResponseEntity<>(fileService.uploadToppingImage(toppingId, imageFile), HttpStatus.OK);
	}
	
//	@GetMapping(value="/attachment/{toppingImgId}",produces = "image/png")
//	public @ResponseBody byte[] showAttachment(@PathVariable("toppingImgId")int toppingImgId){
//		try {
//			ToppingImages attachment=imgService.findByImageId(toppingImgId);
//			if(attachment==null)
//				return null;
//			return attachment.getData();
//		} catch (Exception e) {
//			return null;
//		}
//	}
	
	@GetMapping(value = "/gettoppinghumbnail/{toppingId}", produces = { MediaType.IMAGE_GIF_VALUE,
			MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE })
	public ResponseEntity<?> getToppingImage(@PathVariable Integer toppingId) throws IOException {
		return new ResponseEntity<>(fileService.getToppingImage(toppingId), HttpStatus.OK);
	}
	
	@GetMapping(value = "/getpizzathumbnail/{itemId}", produces = { MediaType.IMAGE_GIF_VALUE,
			MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE })
	public ResponseEntity<?> getPizzaImage(@PathVariable Integer itemId) throws IOException {
		return new ResponseEntity<>(fileService.getPizzaImage(itemId), HttpStatus.OK);
	}
	
//	@GetMapping(value="/attachment",produces="image/png")
//	public @ResponseBody ResponseEntity<?> showAll()
//	{
//		List<ToppingImages> list=imgService.showAll();
//		System.out.println();
//		Stream<ToppingImageDto> result=list.stream().map(ar->
//		convertor.toToppingImg(ar));
//		return Response.success(result);
//	}
}
