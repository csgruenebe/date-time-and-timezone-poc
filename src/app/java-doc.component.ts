/*
@ApiModelProperty(
  position = 7,
  notes = "Bookingdate as date/time with timezone",
  example = "2017-05-11T10:00:00.000+0200",
  required = true)
@JsonFormat(shape = STRING, pattern = ZONED_DATE_TIME_FORMAT)
@JsonInclude(JsonInclude.Include.NON_NULL)
private final ZonedDateTime bookingDate;




public class JacksonConstants {
  public static final String ZONED_DATE_TIME_FORMAT = "yyyy-MM-dd'T'HH:mm:ss.SSSZ";
}


SQL:

ALTER TABLE BOOKINGS ADD COLUMN "booking_time" TIMESTAMP WITH TIME ZONE DEFAULT NULL;
*/
